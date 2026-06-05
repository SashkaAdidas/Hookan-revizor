// Загрузка данных о кальянных
function loadHookahLounges() {
    // Сброс localStorage (удали эту строку после первой загрузки)
    localStorage.removeItem('hookahLounges');
    
    const saved = localStorage.getItem('hookahLounges');
    if (saved) {
        return JSON.parse(saved);
    }
    return [
        {
            id: 1,
            name: "Euphoria",
            location: "ул. Магистральная, 15",
            rating: 4.8,
            reviews: 342,
            priceRange: "₽₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Дым": 9.5, "Сервис": 9.0 },
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            image: "images/photos/lico.jpg",
            schedule: {
                "Понедельник": "12:00 - 00:00",
                "Вторник": "12:00 - 00:00",
                "Среда": "12:00 - 00:00",
                "Четверг": "12:00 - 02:00",
                "Пятница": "12:00 - 03:00",
                "Суббота": "12:00 - 03:00",
                "Воскресенье": "12:00 - 00:00"
            }
        },
        {
            id: 2,
            name: "Чарли Блэк",
            location: "Маяковского, 9",
            rating: 4.6,
            reviews: 256,
            priceRange: "₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Атмосфера": 9.0, "Цены": 8.5 },
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            image: "images/photos/XXL_height.webp",
            schedule: {
                "Понедельник": "14:00 - 02:00",
                "Вторник": "14:00 - 02:00",
                "Среда": "14:00 - 02:00",
                "Четверг": "14:00 - 02:00",
                "Пятница": "14:00 - 04:00",
                "Суббота": "14:00 - 04:00",
                "Воскресенье": "14:00 - 02:00"
            }
        },
        {
            id: 3,
            name: "T&S Lounge",
            location: "Гагарина, 24 (2-этаж)",
            rating: 4.9,
            reviews: 489,
            priceRange: "₽₽₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Качество": 9.8, "Сервис": 9.5 },
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            image: "images/photos/tslounge.webp",
            schedule: {
                "Понедельник": "12:00 - 02:00",
                "Вторник": "12:00 - 02:00",
                "Среда": "12:00 - 02:00",
                "Четверг": "12:00 - 02:00",
                "Пятница": "12:00 - 04:00",
                "Суббота": "12:00 - 04:00",
                "Воскресенье": "12:00 - 02:00"
            }
        },
        {
            id: 4,
            name: "HookahPlace",
            location: "Опаленной юности, 23",
            rating: 4.3,
            reviews: 178,
            priceRange: "₽",
            tags: ["🌙 Расписание:"],
            stats: { "Цены": 9.0, "Удобство": 8.0 },
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            image: "images/photos/hookan-place.webp",
            schedule: {
                "Понедельник": "16:00 - 00:00",
                "Вторник": "16:00 - 00:00",
                "Среда": "16:00 - 00:00",
                "Четверг": "16:00 - 00:00",
                "Пятница": "16:00 - 02:00",
                "Суббота": "16:00 - 02:00",
                "Воскресенье": "16:00 - 00:00"
            }
        },
        {
            id: 5,
            name: "K1 Лаундж",
            location: "Гагарина, 19/2",
            rating: 4.7,
            reviews: 312,
            priceRange: "₽₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Комфорт": 9.3, "Приватность": 9.5 },
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            image: "images/photos/k1l.webp",
            schedule: {
                "Понедельник": "14:00 - 00:00",
                "Вторник": "14:00 - 00:00",
                "Среда": "14:00 - 00:00",
                "Четверг": "14:00 - 00:00",
                "Пятница": "14:00 - 01:30",
                "Суббота": "14:00 - 01:30",
                "Воскресенье": "14:00 - 00:00"
            }
        },
        {
            id: 6,
            name: "Myata 2.0",
            location: "Гагаригна, 56",
            rating: 4.5,
            reviews: 223,
            priceRange: "₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Развлечения": 9.0, "Компания": 8.8 },
            gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
            image: "images/photos/myata.webp",
            schedule: {
                "Понедельник": "15:00 - 02:00",
                "Вторник": "15:00 - 02:00",
                "Среда": "15:00 - 02:00",
                "Четверг": "15:00 - 02:00",
                "Пятница": "15:00 - 04:00",
                "Суббота": "15:00 - 04:00",
                "Воскресенье": "15:00 - 02:00"
            }
        },
        {
            id: 7,
            name: "Hookah Legendary",
            location: "Гаграина, 24/1",
            rating: 4.4,
            reviews: 198,
            priceRange: "₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Терраса": 9.2, "Свежий воздух": 9.0 },
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            image: "images/photos/hookanlegendary.webp",
            schedule: {
                "Понедельник": "16:00 - 03:00",
                "Вторник": "16:00 - 03:00",
                "Среда": "16:00 - 03:00",
                "Четверг": "16:00 - 03:00",
                "Пятница": "16:00 - 03:00",
                "Суббота": "16:00 - 03:00",
                "Воскресенье": "16:00 - 03:00"
            }
        },
        {
            id: 8,
            name: "Kitch Lounge",
            location: "Менделеева, 14",
            rating: 4.6,
            reviews: 267,
            priceRange: "₽₽",
            tags: ["🌙 Расписание:"],
            stats: { "Дизайн": 9.4, "Интерьер": 9.1 },
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            image: "images/photos/KitchLounge.webp",
            schedule: {
                "Понедельник": "15:00 - 01:00",
                "Вторник": "15:00 - 01:00",
                "Среда": "15:00 - 01:00",
                "Четверг": "15:00 - 01:00",
                "Пятница": "15:00 - 03:00",
                "Суббота": "15:00 - 03:00",
                "Воскресенье": "15:00 - 01:00"
            }
        }
    ];
}

// Сохранение в localStorage
function saveHookahLounges() {
    localStorage.setItem('hookahLounges', JSON.stringify(hookahLounges));
}

// Данные о кальянных
let hookahLounges = loadHookahLounges();

// Генерация звёздочек из рейтинга
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '🌟';
    }
    
    return stars;
}

// Создание карточки кальянной
function createCard(lounge) {
    const card = document.createElement('div');
    card.className = 'hookah-card';
    
    // Если есть фото — используем его, иначе градиент
    const bgStyle = lounge.image 
        ? `background-image: url('${lounge.image}'); background-size: cover;`
        : `background: ${lounge.gradient};`;
    
    const tagsHTML = lounge.tags.map(tag => 
        `<span class="info-tag">${tag}</span>`
    ).join('');
    
    const statsHTML = Object.entries(lounge.stats).map(([key, value]) => 
        `<div class="stat-item">${key}: ${value}</div>`
    ).join('');
    
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
                ${lounge.rating.toFixed(1)} <span class="stars">${generateStars(lounge.rating)}</span>
                <span class="reviews-count" style="font-size: 0.8rem; margin-left: 8px;">(${lounge.reviews})</span>
            </div>
        </div>
    `;
    
    // Проверка загрузки фото
    if (lounge.image) {
        const img = new Image();
        img.src = lounge.image;
        img.onload = () => console.log(`✅ Фото загрузилось: ${lounge.image}`);
        img.onerror = () => console.error(`❌ Фото НЕ загрузилось: ${lounge.image}`);
    }
    
    // Клик по рейтингу открывает меню
    const ratingBadge = card.querySelector('.review-trigger');
    ratingBadge.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Клик по рейтингу ID:', lounge.id);
        openReviewMenu(lounge.id);
    });
    
    // Клик по тегу с расписанием открывает модалку
    const tags = card.querySelectorAll('.info-tag');
    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Клик по тегу:', tag.textContent);
            if (lounge.schedule) {
                openScheduleModal(lounge.name, lounge.schedule);
            }
        });
    });
    
    // Клик по карточке
    card.addEventListener('click', () => {
        alert(`Вы выбрали: ${lounge.name}\n\nОценка: ${lounge.rating}/5\nАдрес: ${lounge.location}`);
    });
    
    return card;
}

// Открыть модальное окно с расписанием
function openScheduleModal(loungeName, schedule) {
    console.log('Открыть расписание для:', loungeName);
    
    // Закрыть открытые модалки
    document.querySelectorAll('.schedule-modal').forEach(modal => modal.remove());
    
    const modal = document.createElement('div');
    modal.className = 'schedule-modal active';
    
    const scheduleHTML = Object.entries(schedule).map(([day, time]) => 
        `<div class="schedule-row">
            <span class="schedule-day">${day}</span>
            <span class="schedule-time">${time}</span>
        </div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="schedule-modal-content">
            <span class="close-schedule">&times;</span>
            <h3>📅 Рабочее время</h3>
            <h4 class="schedule-title">${loungeName}</h4>
            <div class="schedule-list">
                ${scheduleHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-schedule').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    
    console.log('Модалка расписания добавлена в DOM');
}

// Инициализация сетки
function initGrid() {
    const grid = document.getElementById('hookahGrid');
    
    hookahLounges.forEach(lounge => {
        const card = createCard(lounge);
        grid.appendChild(card);
    });
    
    // Включаем эффект скролла для мобильных
    initScrollEffect();
}

// Эффект hover для карточки в центре экрана при скролле
function initScrollEffect() {
    // Проверяем, мобильное устройство
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) return;
    
    let activeCard = null;
    
    function updateActiveCard() {
        const cards = document.querySelectorAll('.hookah-card');
        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;
        
        let closestCard = null;
        let closestDistance = Infinity;
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - cardCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = card;
            }
        });
        
        // Снимаем эффект со всех
        document.querySelectorAll('.card-bg.hover-active').forEach(bg => {
            bg.classList.remove('hover-active');
        });
        
        // Добавляем эффект центральной карточке
        if (closestCard && closestCard !== activeCard && closestDistance < viewportHeight / 2) {
            activeCard = closestCard;
            const cardBg = activeCard.querySelector('.card-bg');
            if (cardBg) {
                cardBg.classList.add('hover-active');
            }
        } else if (closestDistance >= viewportHeight / 2) {
            activeCard = null;
        }
    }
    
    // Запускаем при скролле
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveCard();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Проверяем при загрузке и ресайзе
    updateActiveCard();
    window.addEventListener('resize', updateActiveCard);
}

// Параллакс эффект при движении мыши (убран, чтобы не мешать hover)
// document.addEventListener('mousemove', (e) => {
//     const cards = document.querySelectorAll('.hookah-card');
//     const x = (e.clientX / window.innerWidth - 0.5) * 20;
//     const y = (e.clientY / window.innerHeight - 0.5) * 20;
//     
//     cards.forEach(card => {
//         const bg = card.querySelector('.card-bg');
//         if (bg) {
//             bg.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
//         }
//     });
// });

// Открыть меню для добавления отзыва (клик по рейтингу)
function openReviewMenu(loungeId) {
    console.log('Открыть меню для ID:', loungeId);
    
    // Закрыть открытые меню
    document.querySelectorAll('.review-menu').forEach(menu => menu.remove());
    
    const menu = document.createElement('div');
    menu.className = 'review-menu active';
    menu.innerHTML = `
        <div class="review-menu-content">
            <span class="close-menu">&times;</span>
            <h3>Оставить оценку</h3>
            <div class="stars-select" data-rating="0">
                <span data-value="1">⭐</span>
                <span data-value="2">⭐</span>
                <span data-value="3">⭐</span>
                <span data-value="4">⭐</span>
                <span data-value="5">⭐</span>
            </div>
            <textarea class="review-text" placeholder="Напишите ваш отзыв..." rows="4"></textarea>
            <button class="submit-btn">Отправить</button>
        </div>
    `;
    
    document.body.appendChild(menu);
    
    let selectedRating = 0;
    const stars = menu.querySelectorAll('.stars-select span');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.value);
            stars.forEach(s => {
                s.style.opacity = parseInt(s.dataset.value) <= selectedRating ? '1' : '0.3';
                s.style.transform = parseInt(s.dataset.value) <= selectedRating ? 'scale(1.2)' : 'scale(1)';
            });
        });
    });
    
    menu.querySelector('.close-menu').addEventListener('click', () => {
        menu.remove();
    });
    
    menu.addEventListener('click', (e) => {
        if (e.target === menu) menu.remove();
    });
    
    menu.querySelector('.submit-btn').addEventListener('click', () => {
        if (selectedRating === 0) {
            alert('Пожалуйста, поставьте оценку!');
            return;
        }
        
        const lounge = hookahLounges.find(l => l.id === loungeId);
        const reviewText = menu.querySelector('.review-text').value.trim();
        
        if (lounge) {
            // Добавляем отзыв
            if (!lounge.reviewsList) lounge.reviewsList = [];
            lounge.reviewsList.push({
                rating: selectedRating,
                text: reviewText,
                date: new Date().toISOString()
            });
            
            // Пересчитываем средний рейтинг
            const totalRating = lounge.reviewsList.reduce((sum, r) => sum + r.rating, 0);
            lounge.rating = totalRating / lounge.reviewsList.length;
            lounge.reviews = lounge.reviewsList.length;
            
            saveHookahLounges();
            initGrid();
            menu.remove();
            alert('Спасибо за ваш отзыв!');
        }
    });
    
    console.log('Меню добавлено в DOM с классом active');
}

// Стили для меню отзывов
const style = document.createElement('style');
style.textContent = `
    .review-menu {
        position: fixed;
        z-index: 100000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        display: none;
    }
    
    .review-menu.active {
        display: flex !important;
    }
    
    .review-menu-content {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        padding: 30px;
        border-radius: 20px;
        width: 350px;
        position: relative;
        box-shadow: 0 20px 80px rgba(255, 107, 107, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin: auto;
    }
    
    .close-menu {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
        line-height: 1;
    }
    
    .review-menu-content h3 {
        color: #fff;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .stars-select {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin: 20px 0;
    }
    
    .stars-select span {
        font-size: 2.5rem;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 0.3;
    }
    
    .stars-select span:hover {
        transform: scale(1.3);
    }
    
    .review-text {
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        font-family: inherit;
        font-size: 0.9rem;
        resize: vertical;
        margin-top: 15px;
        box-sizing: border-box;
    }
    
    .review-text::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
    
    .submit-btn {
        width: 100%;
        padding: 12px;
        margin-top: 20px;
        background: linear-gradient(135deg, #ff6b6b, #feca57);
        border: none;
        border-radius: 25px;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.3s;
    }
    
    .submit-btn:hover {
        transform: scale(1.05);
    }
    
    .rating-badge.review-trigger {
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .rating-badge.review-trigger:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.7);
    }
    
    .rating-badge.review-trigger::after {
        content: ' 🖱️';
        font-size: 0.8rem;
        opacity: 0.7;
    }
    
    .info-tag {
        cursor: pointer;
        transition: transform 0.3s, background 0.3s;
    }
    
    .info-tag:hover {
        transform: scale(1.05);
        background: rgba(255, 255, 255, 0.3);
    }
    
    /* Стили для модалки расписания */
    .schedule-modal {
        position: fixed;
        z-index: 100000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        display: none;
    }
    
    .schedule-modal.active {
        display: flex !important;
    }
    
    .schedule-modal-content {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        padding: 30px;
        border-radius: 20px;
        width: 400px;
        position: relative;
        box-shadow: 0 20px 80px rgba(255, 107, 107, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin: auto;
    }
    
    .close-schedule {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
        line-height: 1;
    }
    
    .schedule-modal-content h3 {
        color: #fff;
        margin-bottom: 10px;
        text-align: center;
    }
    
    .schedule-title {
        color: #feca57;
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.3rem;
    }
    
    .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .schedule-row {
        display: flex;
        justify-content: space-between;
        padding: 12px 15px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .schedule-day {
        color: #fff;
        font-weight: 500;
    }
    
    .schedule-time {
        color: #feca57;
        font-weight: 600;
    }
    
    /* Мобильная адаптация модалок */
    @media (max-width: 768px) {
        .schedule-modal-content,
        .review-menu-content {
            width: 90% !important;
            max-width: 350px;
            padding: 20px;
            margin: 10px;
        }
        
        .schedule-modal-content h3,
        .review-menu-content h3 {
            font-size: 1.2rem;
        }
        
        .schedule-title {
            font-size: 1.1rem;
        }
        
        .schedule-row {
            padding: 10px 12px;
            font-size: 0.9rem;
        }
        
        .close-menu,
        .close-schedule {
            font-size: 1.5rem;
            top: 8px;
            right: 12px;
        }
        
        .stars-select span {
            font-size: 2rem;
        }
        
        .review-text {
            font-size: 0.85rem;
            padding: 10px;
        }
        
        .submit-btn {
            font-size: 0.95rem;
            padding: 10px;
        }
    }
    
    /* Улучшаем нажатие на тач-устройствах */
    @media (hover: none) and (pointer: coarse) {
        .info-tag,
        .rating-badge.review-trigger,
        .stars-select span,
        .submit-btn {
            min-height: 44px;
            min-width: 44px;
        }
    }
`;
document.head.appendChild(style);

// Фильтрация по рейтингу (опционально)
function filterByRating(minRating) {
    const filtered = hookahLounges.filter(lounge => lounge.rating >= minRating);
    const grid = document.getElementById('hookahGrid');
    grid.innerHTML = '';
    
    filtered.forEach(lounge => {
        const card = createCard(lounge);
        grid.appendChild(card);
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initGrid);

// Экспорт функций для использования в консоли
window.hookahLounges = hookahLounges;
window.filterByRating = filterByRating;

console.log('🔥 Сайт кальянных загружен!');
console.log('Всего кальянных:', hookahLounges.length);
console.log('Использовать filterByRating(4.5) для фильтрации по рейтингу');

