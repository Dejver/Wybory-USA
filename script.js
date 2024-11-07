// Smooth Scroll to Section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Countdown Timer
const countdownElement = document.getElementById("countdown-timer");

function updateCountdown() {
    const electionDate = new Date("November 7, 2028 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = electionDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Refresh every second
    setTimeout(updateCountdown, 1000);
}

updateCountdown();
