const inputRange = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
});

spanRef.style.fontSize = `${inputRange.value}px`;
