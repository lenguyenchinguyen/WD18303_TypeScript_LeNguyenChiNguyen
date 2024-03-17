
const couplepokemon: number = 9;

async function callApi(url: string) {
    let data: Response = await fetch(url);

    return await data.json();
}

const APP: HTMLElement | null = document.getElementById('app');
let html: string = '';

for (let index = 0; index < couplepokemon *2; index++) {
   
    const data: any = callApi(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() *18) + 1}/`);
    data.then(function (response: any) {
        response.sprites.front_default
        html += `   
      
        <div class="col-2">
        <div class="card shadow mb-1" onclick="changeColor(this)">
            <span class="position-absolute top-0" >#$${response.id}</span>    
            <img
                src="${response.sprites.front_default}"
                alt="${response.name}" ></div>
    </div> `
        APP?.innerHTML = html;
    });
}


const startButton = document.getElementById('startButton') as HTMLButtonElement;
const huyButton = document.getElementById('huyButton') as HTMLButtonElement;


let countdownTimer: number | undefined;
let remainingTime = 10; // Adjust the initial countdown time in seconds


function startCountdown(): void {
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
  
      const timeAnnouncement = document.getElementById('timeAnnouncement');
      if (timeAnnouncement) { // Check for time announcement element
        timeAnnouncement.textContent = "THỜI GIAN CỦA BẠN CÒN";
      } else {
        console.warn("Element with ID 'timeAnnouncement' not found for time announcement.");
      }
  
      if (remainingTime === 0) {
        clearInterval(countdownTimer);
        countdownTimer = undefined;
        alert('Hết giờ!'); // Display alert when time runs out
        huyButton.disabled = false; // Enable reset button
       
      }
    }, 1000); // Interval in milliseconds (adjust for desired precision)
  
    startButton.disabled = true; // Disable start button while timer is running
  }
  

function huy() {
    
    // Tải lại trang với URL cụ thể
    window.location.href = "/index.html";
}

startButton.addEventListener('click', startCountdown);
huyButton.addEventListener('click', huy);



const loginForm = document.getElementById('myForm');
const usernameInput = document.getElementById('usernameInput');
let isLoggedIn = false;

function handleLogin() {
    event.preventDefault(); // Ngăn chặn submit form

    const username = usernameInput.value.trim();
    const usernameError = document.getElementById('usernameError');
    const regex = /^[a-zA-Z0-9]/; // Biểu thức chính quy để kiểm tra ký tự
    const morethan2words = /^.{2,}$/;

    if (username === '') {
        usernameError.textContent = 'Vui lòng điền vào trường username.';
    } else if (!regex.test(username)) {
        usernameError.textContent = 'Username không được chứa ký tự đặc biệt.';
    } else if (!morethan2words.test(username)) {
        usernameError.textContent = 'Username phải chứa ít nhất hai ký tự.';
    } else {
        const playerInfo = document.createElement('p');
        playerInfo.textContent = `Người chơi: ${username}`;
        loginForm.innerHTML = '';
        loginForm.appendChild(playerInfo);
        isLoggedIn = true;
        startButton.disabled = false;
        usernameError.textContent = ''; // Xóa thông báo lỗi nếu trường username hợp lệ
    }
}

function handleStart() {
    if (isLoggedIn) {
        // Thực hiện các hành động khi người dùng nhấn nút "Bắt đầu" ở đây
        console.log('Bắt đầu trò chơi!');
    }
}

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', handleLogin);

startButton.addEventListener('click', handleStart);
startButton.disabled = true;

