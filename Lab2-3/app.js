"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pokemon = 48;
function callApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(url);
        return yield data.json();
    });
}
console.log(Math.floor(Math.random() * 48) + 1);
const APP = document.getElementById('app');
let html = '';
for (let index = 0; index < 48; index++) {
    const data = callApi(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 48) + 1}/`);
    data.then(function (response) {
        response.sprites.front_default;
        html += `   
      
        <div class="col-1">
        <div class="card shadow mb-3" onclick="changeColor(this)">
            <span class="position-absolute top-0" >#$${response.id}</span>    
            <img
                src="${response.sprites.front_default}"
                alt="${response.name}" ></div>
    </div> `;
        APP === null || APP === void 0 ? void 0 : APP.innerHTML = html;
    });
}
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
let countdownTimer;
let remainingTime = 10; // Adjust the initial countdown time in seconds
function startCountdown() {
    if (countdownTimer) {
        clearInterval(countdownTimer); // Clear any existing timer
    }
    countdownTimer = setInterval(() => {
        remainingTime--;
        // Update display or perform actions based on remaining time
        const displayElement = document.getElementById('countdownDisplay');
        if (displayElement) {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            displayElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Update the countdown display
        }
        else {
            console.log(`${remainingTime} seconds remaining`); // Log remaining time if no display element found
        }
        if (remainingTime === 0) {
            clearInterval(countdownTimer);
            countdownTimer = undefined;
            alert('Hết giờ!'); // Display alert when time runs out
            resetButton.disabled = false; // Enable reset button
        }
    }, 1000); // Interval in milliseconds (adjust for desired precision)
    startButton.disabled = true; // Disable start button while timer is running
}
function resetCountdown() {
    if (countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = undefined;
    }
    remainingTime = 10; // Reset remaining time
    startButton.disabled = false; // Enable start button
    resetButton.disabled = true; // Disable reset button when timer is stopped
    // Tải lại trang với URL cụ thể
    window.location.href = "http://127.0.0.1:5500/Lab2-3/index.html";
}
startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetCountdown);
// Initial state: Disable reset button
resetButton.disabled = true;
