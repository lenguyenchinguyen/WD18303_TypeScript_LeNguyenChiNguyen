const pokemon: number = 48;

async function callApi(url: string) {
    let data: Response = await fetch(url);

    return await data.json();
}

console.log(Math.floor(Math.random() * 48) + 1);

const APP: HTMLElement | null = document.getElementById('app');
let html: string = '';

for (let index = 0; index < 48; index++) {
    const data: any = callApi(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 48) + 1}/`);
    data.then(function (response: any) {
        response.sprites.front_default
        html += `   
      
        <div class="col-1">
        <div class="card shadow mb-3" onclick="changeColor(this)">
            <span class="position-absolute top-0" >#$${response.id}</span>    
            <img
                src="${response.sprites.front_default}"
                alt="${response.name}" ></div>
    </div> `
        APP?.innerHTML = html;
    });

}


const startButton = document.getElementById('startButton') as HTMLButtonElement;
const resetButton = document.getElementById('resetButton') as HTMLButtonElement;

let countdownTimer: number | undefined;
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
        } else {
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
