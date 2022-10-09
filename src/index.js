import './style.css';

import addImage from './images/icons/add.png';

import minusImage from './images/icons/minus.png';

import resetImage from './images/icons/reset.png';

const addButton = document.getElementById('add-button');
const minusButton = document.getElementById('minus-button');
const result = document.querySelector('.value');
const resetButton = document.getElementById('reset-button');

const createAdd = new Image();
createAdd.src = addImage;
createAdd.alt = 'Addition Button';
createAdd.id = 'add-button-image';
createAdd.classList = 'button-images';
// append to DOM
addButton.appendChild(createAdd);

const createMinus = new Image();
createMinus.src = minusImage;
createMinus.alt = 'Subtraction Button';
createMinus.id = 'minus-button-image';
createMinus.classList = 'button-images';
// append to DOM
minusButton.appendChild(createMinus);

const createReset = new Image();
createReset.src = resetImage;
createReset.alt = 'Reset Button';
createReset.id = 'reset-button-image';
createReset.classList = 'button-images';
// append to DOM
resetButton.appendChild(createReset);

result.innerHTML = 0;

addButton.addEventListener('click', (event) => {
  if (event.target.id === 'add-button-image') {
    result.innerHTML = parseInt(result.innerHTML, 10) + 1;
    let storedResult = JSON.parse(localStorage.getItem('result'));
    storedResult += 1;
    localStorage.setItem('result', JSON.stringify(storedResult));
  }
});

minusButton.addEventListener('click', (event) => {
  if (event.target.id === 'minus-button-image') {
    result.innerHTML = parseInt(result.innerHTML, 10) - 1;
    let storedResult = JSON.parse(localStorage.getItem('result'));
    storedResult -= 1;
    localStorage.setItem('result', JSON.stringify(storedResult));
  }
});

resetButton.addEventListener('click', (event) => {
  if (event.target.id === 'reset-button-image') {
    result.innerHTML = 0;
  }
});

window.onload = () => {
  const storedResult = JSON.parse(localStorage.getItem('result'));
  if (storedResult) {
    result.innerHTML = storedResult;
  }
};
