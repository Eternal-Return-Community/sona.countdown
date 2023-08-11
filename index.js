const countdown = document.getElementById('countdown');
const release = new Date("July 20, 2023, 02:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();
  const diff = release - now;

  if (diff < 0) return countdown.innerHTML = "Jogo foi lançado eba!";

  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
  
  countdown.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

}, 1000);