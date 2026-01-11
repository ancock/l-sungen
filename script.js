/* Smooth Scroll */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Generator */
const ageInput = document.getElementById("ageInput");
const placeInput = document.getElementById("placeInput");
const generateBtn = document.getElementById("generateBtn");
const resultList = document.getElementById("resultList");

generateBtn.addEventListener("click", () => {
  const age = ageInput.value;
  const place = placeInput.value;

  resultList.innerHTML = "";

  if (!age || !place) {
    resultList.innerHTML = "<li>Bitte gib Alter und Wohnort an.</li>";
    return;
  }

  const steps = [];

  if (age < 18) {
    steps.push("Starte ein Klimaprojekt an deiner Schule.");
    steps.push("Sprich mit deiner Familie über Energiesparen.");
  } else {
    steps.push("Wechsle zu Ökostrom oder informiere dich darüber.");
    steps.push("Reduziere Flugreisen und nutze Bahn oder Fahrrad.");
  }

  if (place === "stadt") {
    steps.push("Nutze öffentliche Verkehrsmittel oder Carsharing.");
    steps.push("Engagiere dich in urbanen Begrünungsprojekten.");
  } else {
    steps.push("Installiere eine Mini-Solaranlage (Balkonkraftwerk).");
    steps.push("Unterstütze lokale Landwirtschaft.");
  }

  steps.push("Informiere andere über Klimaschutz & Menschenrechte.");

  steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    resultList.appendChild(li);
  });
});
