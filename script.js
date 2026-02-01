const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  const outgoing = slides[current];
  outgoing.classList.remove("active");
  outgoing.classList.add("exit");

  current = (current + 1) % slides.length;
  const incoming = slides[current];

  incoming.classList.remove("exit");
  incoming.classList.add("active");

  setTimeout(() => {
    outgoing.classList.remove("exit");
    outgoing.style.transform = "translateX(120%)";
  }, 900);

}, 4000);
