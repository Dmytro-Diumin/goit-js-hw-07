function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(userInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    userInput.value = "";
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxesDiv.innerHTML = "";

  let boxSize = 30;
  let nextBoxSize = 10;
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    boxSize += nextBoxSize;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}