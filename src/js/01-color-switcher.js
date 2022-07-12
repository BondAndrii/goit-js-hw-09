
const startBtn = document.querySelector('[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('[data-stop]');
console.log(stopBtn);
// startBtn.addEventListener('click', )
// stopBtn.addEventListener('click')
// body.style.color = #455678;
console.log(document.body.style.color);
document.body.style.color = (186, 186, 186);

function changeStyle() {
  const color = getRandomHexColor();
  console.log(color);
  document.body.style.color = color;
}

changeStyle();





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());