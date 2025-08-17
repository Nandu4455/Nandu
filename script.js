// Button Klick
function begruesse() {
  alert("Yoshi sagt: Hallo! 🐢💚 Willkommen in meiner Welt!");
}

// Münzen erzeugen
const coinsContainer = document.querySelector('.coins-container');
for (let i = 0; i < 10; i++) {
  const coin = document.createElement('div');
  coin.classList.add('coin');
  coin.style.top = `${Math.random() * window.innerHeight}px`;
  coin.style.left = `${Math.random() * window.innerWidth}px`;
  coinsContainer.appendChild(coin);

  // Klick auf Münze
  coin.addEventListener('click', () => {
    document.getElementById('coinSound').play();
    coin.style.transform = 'scale(0)';
    setTimeout(() => coin.remove(), 500);
  });
}

