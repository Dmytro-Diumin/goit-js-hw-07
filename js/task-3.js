const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (elem) => {
    const elements = elem.currentTarget.value.trim();
    output.textContent = elements === "" ? "Anonymous" : elements;
});