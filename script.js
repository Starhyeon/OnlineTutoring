const cards = document.querySelectorAll(".card");
let index = 0;

setInterval(() => {
  const current = cards[index];
  current.classList.remove("active");
  current.classList.add("exit");

  index = (index + 1) % cards.length;
  const next = cards[index];

  next.classList.remove("exit");
  next.classList.add("active");

  // cleanup old exit
  setTimeout(() => {
    current.classList.remove("exit");
    current.style.transform = "translateX(100%)";
  }, 800);

}, 4000);
