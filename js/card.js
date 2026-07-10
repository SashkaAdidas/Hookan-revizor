import { generateStars } from "./utils.js";

// Создание карточки кальянной
export function createCard(lounge) {
  const card = document.createElement("div");
  card.className = "hookah-card";

  // Если есть фото — используем его, иначе градиент
  const bgStyle = lounge.image
    ? `background-image: url('${lounge.image}'); background-size: cover;`
    : `background: ${lounge.gradient};`;

  const tagsHTML = lounge.tags
    .map((tag) => `<span class="info-tag">${tag}</span>`)
    .join("");

  const statsHTML = Object.entries(lounge.stats)
    .map(([key, value]) => `<div class="stat-item">${key}: ${value}</div>`)
    .join("");

  const starsHTML =
    lounge.reviews > 0
      ? `<span class="rating-value">${lounge.rating.toFixed(1)}</span> <span class="stars">${generateStars(lounge.rating)}</span>`
      : "";

  const reviewsCountHTML =
    lounge.reviews > 0
      ? `<span class="reviews-count">(${lounge.reviews})</span>`
      : `<span class="no-reviews-text">нет отзывов</span>`;

  card.innerHTML = `
        <div class="card-bg photo-bg" style="${bgStyle}"></div>
        <div class="card-overlay"></div>
        <div class="price-range">${lounge.priceRange}</div>
        <div class="card-info">
            ${tagsHTML}
        </div>
        <div class="card-stats">
            ${statsHTML}
        </div>
        <div class="card-content">
             <div class="card-title" title="${lounge.name}">${lounge.name}</div>
            <div class="card-location" data-location="${lounge.location}">📍 ${lounge.location}</div>
            <button class="rating-badge review-trigger" data-id="${lounge.id}">
                ${starsHTML}
                ${reviewsCountHTML}
            </button>
        </div>
    `;

  // Обработчики для адреса
  const cardLocation = card.querySelector(".card-location");
  if (lounge.location) {
    // Клик — открываем карту
    cardLocation.addEventListener("click", (e) => {
      e.stopPropagation();
      window.openLocationMap(lounge.location);
    });

    // Ховер — меняем текст
    cardLocation.addEventListener("mouseenter", () => {
      cardLocation.textContent = "Открыть карту";
    });
    
    // Убираем ховер — возвращаем адрес
    cardLocation.addEventListener("mouseleave", () => {
      cardLocation.textContent = `📍 ${lounge.location}`;
    });
  }

  // Проверка загрузки фото

  // Проверка загрузки фото
  if (lounge.image) {
    const img = new Image();
    img.src = lounge.image;
    img.onload = () => console.log(` Фото загрузилось: ${lounge.image}`);
    img.onerror = () =>
      console.error(`❌ Фото НЕ загрузилось: ${lounge.image}`);
  }

  // Клик по рейтингу открывает меню
  const ratingBadge = card.querySelector(".review-trigger");
  ratingBadge.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Клик по рейтингу ID:", lounge.id);
    window.openReviewMenu(lounge.id);
  });

  // Клик по тегу с расписанием открывает модалку
  const tags = card.querySelectorAll(".info-tag");
  tags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Клик по тегу:", tag.textContent);
      if (lounge.schedule) {
        window.openScheduleModal(lounge.name, lounge.schedule);
      }
    });
  });

  // Клик по карточке
  card.addEventListener("click", () => {
    alert(
      `Вы выбрали: ${lounge.name}\n\nОценка: ${lounge.rating}/5\nАдрес: ${lounge.location}`,
    );
  });

  return card;
}
