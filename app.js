const API = "https://api.adviceslip.com/advice";

const submit = document.getElementById("submit");

function updateUI(advice) {
  document.getElementById("title").textContent = `ADVICE #${advice.id}`;
  document.getElementById("text").textContent = `"${advice.advice}"`;
}

function getData(API) {
  return fetch(API)
    .then((response) => response.json())
    .then((data) => data.slip);
}

submit.addEventListener("click", () => {
  getData(API)
    .then((advice) => updateUI(advice))
    .catch((error) => console.error("error:", error));
});
