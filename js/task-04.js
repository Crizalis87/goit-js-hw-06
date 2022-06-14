const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");
console.log(counterValue);

const handleClickDec = () => {
  counterValue.textContent -= 1;
};

const handleClickInc = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementBtn.addEventListener("click", handleClickDec);
incrementBtn.addEventListener("click", handleClickInc);
