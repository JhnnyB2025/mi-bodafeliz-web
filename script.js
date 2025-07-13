// Cambia esta fecha por la fecha real de tu boda
const weddingDate = new Date("December 31, 2025 15:00:00").getTime();

const countdown = document.getElementById("timer");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timerInterval);
    countdown.innerHTML = "¡Es hoy!";
  }
};

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar inmediatamente al cargar