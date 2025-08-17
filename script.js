function starteExplosion() {
  for (let i = 0; i < 30; i++) {
    const kreis = document.createElement("div");
    kreis.classList.add("explosion");
    
    kreis.style.width = `${Math.random() * 30 + 10}px`;
    kreis.style.height = kreis.style.width;
    kreis.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    kreis.style.position = "absolute";
    kreis.style.top = `${Math.random()*window.innerHeight}px`;
    kreis.style.left = `${Math.random()*window.innerWidth}px`;
    kreis.style.borderRadius = "50%";
    kreis.style.opacity = 0.8;
    kreis.style.pointerEvents = "none";

    document.body.appendChild(kreis);

    // Animation: aufsteigen und verschwinden
    let angle = Math.random() * 2 * Math.PI;
    let distance = 100 + Math.random()*200;
    let dx = Math.cos(angle) * distance;
    let dy = Math.sin(angle) * distance;

    kreis.animate([
      { transform: 'translate(0,0)', opacity: 0.8 },
      { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
    ], {
      duration: 1500 + Math.random()*1000,
      easing: 'ease-out'
    });

    setTimeout(() => kreis.remove(), 2000);
  }
}
