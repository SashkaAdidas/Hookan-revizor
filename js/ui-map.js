// Модалка карты
export function openLocationMap(address) {
    console.log("Открыть карту для адреса:", address);

    // Закрыть открытые модалки
    document.querySelectorAll(".schedule-modal, .review-menu").forEach((el) => {
        if (
            el.classList.contains("schedule-modal") ||
            el.classList.contains("review-menu")
        ) {
            el.remove();
        }
    });

    // Создаём окно с кнопкой открытия карты
    const mapWindow = document.createElement("div");
    mapWindow.className = "location-modal active";

    mapWindow.innerHTML = `
        <div class="location-modal-content">
            <span class="close-map">&times;</span>
            <h3>📍 Найти на карте</h3>
            <p class="location-address">${address}</p>
            <button id="open-yandex-map-btn" class="open-map-btn">
                🗺️ Открыть в Яндекс.Картах
            </button>
            <p class="map-hint">Открытие в новой вкладке</p>
        </div>
    `;

    console.log("(mapWindow)", mapWindow);
    console.log("document.body", document.body);

    if (!document.body) {
        console.error("❌ document.body не найден! Модалка не добавится.");
        return;
    }

    document.body.appendChild(mapWindow);
    console.log("✅ Модалка добавлена в DOM");

    // Кнопка закрытия
    mapWindow.querySelector(".close-map").addEventListener("click", () => {
        mapWindow.remove();
    });

    // Закрытие при клике вне окна
    mapWindow.addEventListener("click", (e) => {
        if (e.target === mapWindow) mapWindow.remove();
    });

    // Открытие в Яндекс.Картах
    mapWindow.querySelector("#open-yandex-map-btn").addEventListener("click", () => {
        const encodedAddress = encodeURIComponent(address);
        const yandexMapUrl = `https://yandex.ru/maps/?mode=search&text=${encodedAddress}`;
        window.open(yandexMapUrl, "_blank");
    });

    console.log("Проверка в DOM:", !!document.querySelector(".location-modal"));
}
