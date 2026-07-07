// Модалка расписания
export function openScheduleModal(loungeName, schedule) {
    console.log("Открыть расписание для:", loungeName);

    // Закрыть открытые модалки
    document
        .querySelectorAll(".schedule-modal")
        .forEach((modal) => modal.remove());

    const modal = document.createElement("div");
    modal.className = "schedule-modal active";

    const scheduleHTML = Object.entries(schedule)
        .map(
            ([day, time]) =>
                `<div class="schedule-row">
                    <span class="schedule-day">${day}</span>
                    <span class="schedule-time">${time}</span>
                </div>`,
        )
        .join("");

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

    modal.querySelector(".close-schedule").addEventListener("click", () => {
        modal.remove();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
    });

    console.log("Модалка расписания добавлена в DOM");
}
