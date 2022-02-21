const button = document.getElementById(`btn`);
const html2 = document.getElementById(`html`);

button.addEventListener(`click`, function () {
  html2.classList.toggle("dark");
  button.classList.toggle("text-white");
});
