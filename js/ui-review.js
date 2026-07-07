// Модалка отзывов
export async function openReviewMenu(loungeId) {
    console.log("Открыть меню для ID:", loungeId);

    // Закрыть открытые меню
    document.querySelectorAll(".review-menu").forEach((menu) => menu.remove());

   // Загружаем отзывы из Supabase
    const reviews = await window.loadReviewsForLounge(loungeId);
    const lounge = window.hookahLounges.find((l) => l.id === loungeId);

    // ВАЖНО: Считаем РЕАЛЬНЫЙ рейтинг ТОЛЬКО из загруженных отзывов
    let averageRating = 0;
    
    if (reviews && reviews.length > 0) {
        // Суммируем рейтинги всех отзывов и делим на их количество
        const totalRating = reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0);
        averageRating = totalRating / reviews.length;
    } else {
        // Если отзывов пока нет (0 шт), показываем 0
        averageRating = 0;
    }

    // Формируем список отзывов
    const reviewsListHTML =
        reviews.length > 0
            ? reviews
                .slice(0, 10)
                .map((review, index) => {
                    const date = new Date(review.created_at).toLocaleDateString(
                        "ru-RU",
                    );
                    const stars = "⭐".repeat(review.rating);
                    return `
                        <div class="review-item ${index === reviews.length - 1 ? "" : "review-border"}">
                            <div class="review-header">
                                <span class="review-stars">${stars}</span>
                                <span class="review-date">${date}</span>
                            </div>
                            ${review.text ? `<p class="review-text-display">${review.text}</p>` : ""}
                        </div>
                    `;
                })
                .join("")
            : '<p class="no-reviews">Пока нет отзывов. Будьте первым!</p>';

    const menu = document.createElement("div");
    menu.className = "review-menu active";
    menu.innerHTML = `
        <div class="review-menu-content">
            <span class="close-menu">&times;</span>
            <h3>Оставить оценку</h3>
            <p style="color: #feca57; text-align: center; margin-bottom: 10px; font-size: 1.1rem;">
                Текущий рейтинг: ${averageRating.toFixed(1)} ⭐
            </p>
            <p style="color: rgba(255,255,255,0.7); text-align: center; margin-bottom: 15px; font-size: 0.9rem;">
                Отзывов: ${reviews.length}
            </p>
            
            <div class="reviews-section">
                <h4 style="color: #fff; margin-bottom: 10px;">Отзывы:</h4>
                <div class="reviews-list">
                    ${reviewsListHTML}
                </div>
            </div>
            
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.2); margin: 20px 0;">
            
            <div class="add-review-section">
                <h4 style="color: #fff; margin-bottom: 10px;">Ваш отзыв:</h4>
                <div class="stars-select" data-rating="0">
                    <span data-value="1">⭐</span>
                    <span data-value="2">⭐</span>
                    <span data-value="3">⭐</span>
                    <span data-value="4">⭐</span>
                    <span data-value="5">⭐</span>
                </div>
                <textarea class="review-text-input" placeholder="Напишите ваш отзыв..." rows="3"></textarea>
                <button class="submit-btn">Отправить</button>
            </div>
        </div>
    `;

    document.body.appendChild(menu);

    let selectedRating = 0;
    const stars = menu.querySelectorAll(".stars-select span");

    stars.forEach((star) => {
        star.addEventListener("click", () => {
            selectedRating = parseInt(star.dataset.value);
            stars.forEach((s) => {
                s.style.opacity =
                    parseInt(s.dataset.value) <= selectedRating ? "1" : "0.3";
                s.style.transform =
                    parseInt(s.dataset.value) <= selectedRating
                        ? "scale(1.2)"
                        : "scale(1)";
            });
        });
    });

    menu.querySelector(".close-menu").addEventListener("click", () => {
        menu.remove();
    });

    menu.addEventListener("click", (e) => {
        if (e.target === menu) menu.remove();
    });

    menu.querySelector(".submit-btn").addEventListener("click", async () => {
        if (selectedRating === 0) {
            alert("Пожалуйста, поставьте оценку!");
            return;
        }

        const reviewText = menu.querySelector(".review-text-input").value.trim();

        // Сохраняем в Supabase
        console.log("Отправка отзыва:", { loungeId, selectedRating, reviewText });
        const result = await window.supabase.addReview(
            loungeId,
            selectedRating,
            reviewText,
        );

        console.log("Результат сохранения:", result);

        if (result) {
            menu.remove();
            alert("Спасибо за ваш отзыв!");
            // Перезагружаем карточки
            window.initGrid();
        } else {
            alert("Ошибка сохранения отзыва. Попробуйте позже.");
        }
    });

    console.log("Меню добавлено в DOM с классом active");
}
