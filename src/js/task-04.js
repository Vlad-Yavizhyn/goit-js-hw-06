
const counterValue = document.querySelector('#value');
counterValue.value = 0;

const DecrementBtn = document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => { counterValue.value -= 1; counterValue.textContent = counterValue.value });

const IncrementBtn = document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => { counterValue.value += 1; counterValue.textContent = counterValue.value });

