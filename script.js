const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");

//Fucntion to start Count-Down
let StartCount = 0;
let intervalId;

const startTimer = () => {

    intervalId = setInterval(() => {
        countDownElement.innerHTML = StartCount++;

    }, 1000);
};

// Function to stop-Count-Down
const stopTime = () => {
    clearInterval(intervalId);
};

// Function to Restart the time
const resetTime = () => {
    StartCount = 0;
    countDownElement.innerHTML = StartCount;
    clearInterval(intervalId);
};

// Function to Get-Time
const GetTime = () => {
    newpara = document.createElement("p");
    newpara.innerText = `The Stop Time is  ${StartCount - 1}`;
    resetValueElement.append(newpara)
};

// Function to clear the time
const ClearTime = () => {
    resetValueElement.innerHTML = "";
};

document.querySelector(".Start-btn").addEventListener("click", startTimer);
document.querySelector(".Stop-btn").addEventListener("click", stopTime);
document.querySelector(".Reset-btn").addEventListener("click", resetTime);
document.querySelector(".time-btn").addEventListener("click", GetTime);
document.querySelector(".clear-btn").addEventListener("click", ClearTime);