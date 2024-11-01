let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector("#display");
let int = null;
let lapCounter = 1; // Counter to number each lap

document.getElementById("startBtn").addEventListener("click", () => {
    int = setInterval(displayTimer, 10);
    document.getElementById("startBtn").disabled = true;
});

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(int);
    document.getElementById("startBtn").disabled = false;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(int);
    document.getElementById("startBtn").disabled = false;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 00";
    document.getElementById("lapsList").innerHTML = ""; // Clear laps
    lapCounter = 1; // Reset lap counter
});

document.getElementById("lapBtn").addEventListener("click", () => {
    let lapTime = timeRef.innerHTML;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
    document.getElementById("lapsList").appendChild(lapItem);
});

function displayTimer() {
    milliseconds += 1;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}