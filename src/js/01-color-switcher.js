
const startBtn = document.querySelector('[data-start]');
// console.log(startBtn);
const stopBtn = document.querySelector('[data-stop]');
// console.log(stopBtn);
const styleBody = document.body.style;
startBtn.addEventListener('click', changeStyle);
stopBtn.addEventListener('click', stopChangeStyle);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());

function changeStyle() {
  timeoutId = setInterval(() => {
    const color = getRandomHexColor();
    console.log(color);
    document.body.style.backgroundColor = color;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function stopChangeStyle() {
  clearInterval(timeoutId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
// body.style.color = #455678;
// console.log(document.body.style.color);
// document.body.style.backgroundColor = 

// function changeStyle() {
//   const color = getRandomHexColor();
//   console.log(color);
//   document.body.style.backgroundColor = color;
// }

// changeStyle();




