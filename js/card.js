import { generateStars } from './utils.js';

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

  const starsHTML = lounge.reviews > 0
    ? `${lounge.rating.toFixed(1)} <span class="stars">${generateStars(lounge.rating)}</span>`
    : '';

  const reviewsCountHTML = lounge.reviews > 0
    ? `<span class="reviews-count" style="font-size: 0.8rem; margin-left: 8px;">(${lounge.reviews})</span>`
    : `<span class="reviews-count no-reviews-text">нет отзывов</span>`;

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
            <div class="card-title">${lounge.name}</div>
            <div class="card-location">📍 ${lounge.location}</div>
            <div class="rating-badge review-trigger" data-id="${lounge.id}">
                ${starsHTML}
                ${reviewsCountHTML}
            </div>
        </div>
    `;

  //  card создан — теперь можно искать .card-location
  const cardLocation = card.querySelector(".card-location");
  if (lounge.location) {
    cardLocation.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Клик по адресу:", lounge.location);
      window.openLocationMap(lounge.location);
    });
  }

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
