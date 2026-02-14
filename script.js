
document.getElementById("validateBtn").addEventListener("click", showMessage);

document.querySelectorAll(".nextBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    showScreen(btn.dataset.next);
  });
});

document.getElementById("finishBtn").addEventListener("click", () => {
  window.close();
});
const compliments = [
  "Tu es une personne qui mérite bien plus de douceur que tu ne le penses ♥",
  "Ton sourire peut illuminer une pièce entière, même si tu ne t'en rends pas compte ♥",
  "Tu as une énergie unique, et c'est ce qui te rend spécial ♥",
  "Tu mérites de belles choses, aujourd'hui comme tous les jours ♥",
  "Quelqu'un, quelque part, est reconnaissant de t'avoir dans sa vie ♥"
];

function showMessage() {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    alert("Mets au moins un petit prénom");
    return;
  }

  document.getElementById("message").textContent =
    "Joyeuse Saint-Valentin, " + name + " ♥";

  showScreen("screen2");
}

function showScreen(id) {
  document.querySelectorAll(".card").forEach(card => card.style.display = "none");
  document.getElementById(id).style.display = "block";

  if (id === "screen3") {
    document.getElementById("compliment").textContent =
      compliments[Math.floor(Math.random() * compliments.length)];
  }
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  heart.style.fontSize = (20 + Math.random() * 20) + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 500);