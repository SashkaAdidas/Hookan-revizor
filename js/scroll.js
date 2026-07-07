// Эффект hover для карточки в центре экрана при скролле
export function initScrollEffect() {
  try {
    // Проверяем, мобильное устройство
    const isMobile = window.innerWidth <= 768;

    console.log("initScrollEffect вызван, isMobile:", isMobile);

    // Очищаем старые слушатели
    window.removeEventListener("scroll", handleScrollThrottled);
    window.removeEventListener("resize", handleResizeThrottled);

    if (!isMobile) {
      console.log("Не мобильное устройство, эффект отключён");
      // Снимаем эффект со всех карточек
      document.querySelectorAll(".card-bg.hover-active").forEach((bg) => {
        bg.classList.remove("hover-active");
      });
      document.querySelectorAll(".card-stats.hover-active").forEach((stats) => {
        stats.classList.remove("hover-active");
      });
      return;
    }

    let activeCard = null;

    function updateActiveCard() {
      try {
        const cards = document.querySelectorAll(".hookah-card");
        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;

        let closestCard = null;
        let closestDistance = Infinity;

        // Находим ближайшую карточку к центру экрана
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();

          // Проверяем, видна ли карточка на экране
          if (rect.top < viewportHeight && rect.bottom > 0) {
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - cardCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestCard = card;
            }
          }
        });

        // Снимаем эффект со всех
        document.querySelectorAll(".card-bg.hover-active").forEach((bg) => {
          bg.classList.remove("hover-active");
        });
        document
          .querySelectorAll(".card-stats.hover-active")
          .forEach((stats) => {
            stats.classList.remove("hover-active");
          });

        // Добавляем эффект центральной карточке (только если карточка в зоне 50%)
        if (closestCard && closestDistance < viewportHeight * 0.5) {
          const cardBg = closestCard.querySelector(".card-bg");
          const cardStats = closestCard.querySelector(".card-stats");
          if (cardBg) {
            cardBg.classList.add("hover-active");
          }
          if (cardStats) {
            cardStats.classList.add("hover-active");
          }
        }
      } catch (e) {
        console.error("Ошибка в updateActiveCard:", e);
      }
    }

    // Throttle функция
    let ticking = false;
    let resizeTicking = false;

    function handleScrollThrottled() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveCard();
          ticking = false;
        });
        ticking = true;
      }
    }


    function handleResizeThrottled() {
      if (!resizeTicking) {
        window.requestAnimationFrame(() => {
          initScrollEffect();
          updateActiveCard(); // ← обновляем эффект при ресайзе
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    }

    // Запускаем при скролле (оптимизировано с throttle)
    window.addEventListener("scroll", handleScrollThrottled, { passive: true });
    window.addEventListener("resize", handleResizeThrottled);

    // Проверяем при загрузке
    updateActiveCard();

    console.log("Эффект скролла для мобильных включён");
  } catch (e) {
    console.error("Ошибка в initScrollEffect:", e);
  }
}
