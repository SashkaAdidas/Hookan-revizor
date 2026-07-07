// Импорты UI компонентов
import { openScheduleModal } from './js/ui-schedule.js';
import { openLocationMap } from './js/ui-map.js';
import { openReviewMenu } from './js/ui-review.js';
import { createCard } from './js/card.js';
import { initScrollEffect } from './js/scroll.js';

// Экспорт для UI модулей
window.loadReviewsForLounge = loadReviewsForLounge;
window.initGrid = initGrid;
window.openScheduleModal = openScheduleModal;
window.openLocationMap = openLocationMap;
window.openReviewMenu = openReviewMenu;

// Загрузка отзывов для кальянной из Supabase
async function loadReviewsForLounge(loungeId) {
  if (!window.supabase || !window.supabase.getReviews) {
    console.log('⚠️ Supabase не доступен');
    return [];
  }
  
  try {
    const reviews = await window.supabase.getReviews(loungeId);
    console.log('📦 Загружено отзывов для ID', loungeId, ':', reviews.length);
    return reviews;
  } catch (error) {
    console.error("Ошибка загрузки отзывов:", error);
    return [];
  }
}

// Загрузка данных о кальянных из JSON
async function loadHookahLounges() {
  const response = await fetch('data/lounges.json');
  return await response.json();
}

// Сохранение в localStorage (если нужно)
function saveHookahLounges() {
  localStorage.setItem("hookahLounges", JSON.stringify(hookahLounges));
}

// Инициализация сетки
async function initGrid() {
  const grid = document.getElementById("hookahGrid");
  if (!grid) {
    console.error("Grid элемент не найден!");
    return;
  }

  // Загружаем данные из JSON
  const lounges = await loadHookahLounges();
  window.hookahLounges = lounges; // Сохраняем для доступа из других функций
  console.log("Инициализация сетки...");
  console.log("Количество кальянных:", lounges.length);

  // Очищаем сетку
  grid.innerHTML = "";

  // Создаём карточки
  for (const lounge of lounges) {
    try {
      // Загружаем отзывы для этой кальянной
      let reviews = [];
      if (typeof supabase !== "undefined" && supabase.getReviews) {
        reviews = await loadReviewsForLounge(lounge.id);
        console.log(`Отзывов для ${lounge.name}:`, reviews.length);

        // Считаем рейтинг из отзывов
        if (reviews.length > 0) {
          const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
          lounge.rating = totalRating / reviews.length;
          lounge.reviews = reviews.length;
        } else {
          // Если отзывов нет — скрываем рейтинг
          lounge.reviews = 0;
        }
      } else {
        console.log("Supabase не подключён, используем базовые данные");
        lounge.reviews = 0;
      }

      const card = createCard(lounge);
      grid.appendChild(card);
    } catch (error) {
      console.error(`Ошибка создания карточки ${lounge.name}:`, error);
    }
  }

  console.log("✅ Карточки загружены:", grid.children.length);

  // Включаем эффект скролла для мобильных
  setTimeout(() => {
    initScrollEffect();
  }, 100);
}

// Фильтрация по рейтингу (опционально)
function filterByRating(minRating) {
  const lounges = window.hookahLounges || [];
  const filtered = lounges.filter((lounge) => lounge.rating >= minRating);
  const grid = document.getElementById("hookahGrid");
  grid.innerHTML = "";

  filtered.forEach((lounge) => {
    const card = createCard(lounge);
    grid.appendChild(card);
  });
}

// Запуск при загрузке страницы
document.addEventListener("DOMContentLoaded", async () => {
  // Сброс кэша при каждой загрузке
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((reg) => reg.unregister());
    });
  }

  // Очистка localStorage при необходимости
  const lastVersion = localStorage.getItem("appVersion");
  const currentVersion = "4";

  if (lastVersion !== currentVersion) {
    localStorage.removeItem("hookahLounges");
    localStorage.setItem("appVersion", currentVersion);
    console.log("🔄 Кэш обновлён: версия", currentVersion);
  }

  console.log("🔥 Сайт кальянных загружен!");
  initGrid();
});

// Экспорт функций для использования в консоли
window.filterByRating = filterByRating;

// Запуск при загрузке
console.log("🔥 Сайт кальянных загружен!");
console.log("Использовать filterByRating(4.5) для фильтрации по рейтингу");
console.log("Данные доступны в window.hookahLounges после загрузки");
