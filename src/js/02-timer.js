import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const timerRef = document.querySelector(".timer");
console.log(timerRef);
const inputRef=document.querySelector('#datetime-picker')
console.log(inputRef);
const startBtn = document.querySelector("[data-start]")
console.log(startBtn);
const counterDays = document.querySelector('[data-days]');
console.log(counterDays);
const counterHours = document.querySelector('[data-hours]');
console.log(counterHours);
const counterMinutes = document.querySelector('[data-minutes]');
console.log(counterMinutes);
const counterSeconds = document.querySelector('[data-seconds]');
console.log(counterSeconds);













function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};