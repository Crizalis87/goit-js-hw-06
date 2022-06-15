const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");

let counterValue = 0;

const handleClickDec = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

const handleClickInc = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleClickDec);
incrementBtn.addEventListener("click", handleClickInc);
