"use strict"
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix, { Notify } from 'notiflix';
const timerRef = document.querySelector(".timer");
// console.log(timerRef);
const inputRef=document.querySelector('#datetime-picker')
// console.log(inputRef);
const startBtn = document.querySelector("[data-start]")
// console.log(startBtn);
const counterDays = document.querySelector('[data-days]');
// console.log(counterDays);
const counterHours = document.querySelector('[data-hours]');
// console.log(counterHours);
const counterMinutes = document.querySelector('[data-minutes]');
// console.log(counterMinutes);
const counterSeconds = document.querySelector('[data-seconds]');
// console.log(counterSeconds);
let time_deadline = null;
startBtn.disabled = true;
let intervalId;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        time_deadline = selectedDates[0].getTime(); 
        // console.log(time_deadline);
        if (time_deadline <= new Date()) {            
            Notify.failure('Ти шо Термінатор?! Please choose a date in the future!')
            // console.log(error);
            return;
        }
        startBtn.disabled = false;
  },
};
flatpickr(inputRef, options);
let timeToEnd = {};
const goTimer = () => { 
    startBtn.disabled = true;
    inputRef.disabled = true;
    let delta;
    
    intervalId = setInterval(() => {
        delta = time_deadline - new Date().getTime();
        if (delta <= 0) {           
            clearInterval(intervalId);
            return;
        };
        
        timeToEnd = convertMs(delta);
        // console.log(object);
        updateTextcontent(timeToEnd)
    },1000)
}
function updateTextcontent(date) {
        counterDays.textContent = addLeadingZero(date.days);
        counterHours.textContent = addLeadingZero(date.hours);
        counterMinutes.textContent = addLeadingZero(date.minutes);
        counterSeconds.textContent = addLeadingZero(date.seconds);
}
function addLeadingZero(value) {
        return String(value).padStart(2,0)
}
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
            console.log({ days, hours, minutes, seconds });
    return { days, hours, minutes, seconds };
    }
startBtn.addEventListener('click', goTimer);


//     addLeadingZero(value) {
//         return String(value).padStart(2,0)
//     }
//     })
//     start(rootselector, deadline) {
//         console.log(rootselector, deadline);
//         let now = Date.now();
//         let delta = deadline - now;
//         if (delta <= 0) {
//             Notify.failure('Ти шо Термінатор?! Please choose a date in the future!')
//             console.log(error);
//             return;
//         }
//         this.intervalId = setInterval(() => {
//             now = Date.now();
//             let delta = deadline - now;
//             const data = this.convertMs(delta);            
//             console.log(deadline - Date.now());
//             if (delta <= 0) {
//                 Notify.success('Твій час вийшов! Прощавай, москалику! ХА-ХА-ХА-ХА!');
//                 clearInterval(this.intervalId);
//                 return;
//             } 
//             startBtn.disabled = false;
//             // startBtn.addEventListener('click', )
//             this.updateTextcontent(rootselector, data);
//         }, 1000)
//         // console.log(delta);
//     },
//     convertMs(ms) {
//   // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//             console.log({ days, hours, minutes, seconds });
//     return { days, hours, minutes, seconds };
//     },
    // updateTextcontent(rootselector, { days, hours, minutes, seconds }) {
    //     counterDays.textContent = this.addLeadingZero(days);
    //     counterHours.textContent = this.addLeadingZero(hours);
    //     counterMinutes.textContent = this.addLeadingZero(minutes);
    //     counterSeconds.textContent = this.addLeadingZero(seconds);
    // },
    // addLeadingZero(value) {
    //     return String(value).padStart(2,0)
    // }

// timer.start(timerRef, time_deadline);








