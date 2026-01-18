/* =========================
   SMOOTH SCROLL (ACCESSIBLE)
========================= */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Accessibility: Fokus auf Ziel setzen
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

/* =========================
   GENERATOR LOGIK
========================= */
const form = document.getElementById("climateForm");
const ageInput = document.getElementById("ageInput");
const placeInput = document.getElementById("placeInput");
const generateBtn = document.getElementById("generateBtn");
const resultList = document.getElementById("resultList");

generateBtn.addEventListener("click", () => {
  const age = parseInt(ageInput.value, 10);
  const place = placeInput.value;

  // Reset
  resultList.innerHTML = "";

  // Validierung
  if (isNaN(age) || age < 10 || age > 99 || !place) {
    showMessage("Bitte gib ein gültiges Alter (10–99) und deinen Wohnort an.");
    return;
  }

  const steps = [];

  /* Altersabhängige Empfehlungen */
  if (age < 18) {
    steps.push("Starte oder unterstütze ein Schulprojekt zu Klimaschutz und Menschenrechten.");
    steps.push("Sprich in deiner Familie über Energiesparen und faire Konsumentscheidungen.");
  } else {
    steps.push("Wechsle zu Ökostrom und informiere dich über nachhaltige Energieanbieter.");
    steps.push("Plane Reisen möglichst mit Bahn oder Bus statt mit dem Flugzeug.");
  }

  /* Ortsabhängige Empfehlungen */
  if (place === "stadt") {
    steps.push("Nutze öffentliche Verkehrsmittel, Carsharing oder das Fahrrad im Alltag.");
    steps.push("Engagiere dich in urbanen Begrünungs- oder Nachbarschaftsprojekten.");
  } else {
    steps.push("Prüfe die Nutzung eines Balkonkraftwerks oder lokaler Solarangebote.");
    steps.push("Unterstütze regionale Betriebe und nachhaltige Landwirtschaft.");
  }

  /* Menschenrechts-Bezug */
  steps.push("Informiere andere darüber, wie Klimaschutz das Recht auf Wasser, Nahrung und Gesundheit schützt.");
  steps.push("Beteilige dich an Initiativen, die sich für Klimagerechtigkeit und globale Verantwortung einsetzen.");

  renderList(steps);
});

/* =========================
   HILFSFUNKTIONEN
========================= */
function showMessage(message) {
  const li = document.createElement("li");
  li.textContent = message;
  li.style.color = "#93c5fd";
  resultList.appendChild(li);
}

function renderList(items) {
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    resultList.appendChild(li);
  });

  // Kleine Animation für UX
  resultList.style.opacity = "0";
  requestAnimationFrame(() => {
    resultList.style.transition = "opacity 0.4s ease";
    resultList.style.opacity = "1";
  });
}
