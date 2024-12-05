function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    // Format hours, minutes, and seconds with leading zeros
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initialize clock and set it to update every second
setInterval(updateClock, 1000);
updateClock();
