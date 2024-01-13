function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color');
const widget = document.querySelector('.widget');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  widget.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});