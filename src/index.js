import './style.css';

import addImage from './images/icons/add.png';

import minusImage from './images/icons/minus.png';

import resetImage from './images/icons/reset.png';

import {
  addButton, minusButton, result, resetButton,
  createAdd, createMinus, createReset,
} from './modules/Variables.js';

createAdd.src = addImage;
createAdd.alt = 'Addition Button';
createAdd.id = 'add-button-image';
createAdd.classList = 'button-images';
// append to DOM
addButton.appendChild(createAdd);

createMinus.src = minusImage;
createMinus.alt = 'Subtraction Button';
createMinus.id = 'minus-button-image';
createMinus.classList = 'button-images';
// append to DOM
minusButton.appendChild(createMinus);

createReset.src = resetImage;
createReset.alt = 'Reset Button';
createReset.id = 'reset-button-image';
createReset.classList = 'button-images';
// append to DOM
resetButton.appendChild(createReset);

result.innerHTML = 0;

addButton.addEventListener('click', (event) => {
  if ((event.target.id === 'add-button-image') || (event.target.id === 'add-button')) {
    result.innerHTML = parseInt(result.innerHTML, 10) + 1;
    let storedResult = JSON.parse(localStorage.getItem('result'));
    storedResult += 1;
    localStorage.setItem('result', JSON.stringify(storedResult));
  }
});

minusButton.addEventListener('click', (event) => {
  if ((event.target.id === 'minus-button-image') || (event.target.id === 'minus-button')) {
    result.innerHTML = parseInt(result.innerHTML, 10) - 1;
    let storedResult = JSON.parse(localStorage.getItem('result'));
    storedResult -= 1;
    localStorage.setItem('result', JSON.stringify(storedResult));
  }
});

resetButton.addEventListener('click', (event) => {
  if ((event.target.id === 'reset-button-image') || (event.target.id === 'reset-button')) {
    result.innerHTML = 0;
  }
});

window.onload = () => {
  const storedResult = JSON.parse(localStorage.getItem('result'));
  if (storedResult) {
    result.innerHTML = storedResult;
  }
};
