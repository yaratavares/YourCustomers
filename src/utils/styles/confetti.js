import "./style.css";

export default function confetti() {
  function addConfetti() {
    for (let i = 0; i < 5; i += 1) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = `${Math.random() * 100}%`;
      c.style.background = `hsl(${Math.random() * 360}deg,100%,50%)`;
      c.style.animationDuration = `${Math.random() * 3 + 9}s`;
      c.style.animationDelay = `${Math.random() * 10}s`;
      document.body.appendChild(c);
    }
  }

  addConfetti();
}
