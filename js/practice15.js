const refs = {
    swHour: document.querySelector(".stopwatch-hour"), 
    swMin: document.querySelector(".stopwatch-minute"), 
    swSec: document.querySelector(".stopwatch-second"), 
    swMs: document.querySelector(".stopwatch-millisecond"),
    swStart: document.querySelector("button[data-button = 'start']"), 
    swLap: document.querySelector("button[data-button = 'lap']"),
    swRes: document.querySelector(".result ol")
}

let timerId = null;
let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timer;

refs.swStart.addEventListener("click", onStart);
refs.swLap.addEventListener("click", onLap);

function onStart() {
    refs.swLap.disabled = false;
    
    let attr = refs.swStart.getAttribute("data-button");
    if (attr === "start") {
        timer = true;
        refs.swStart.setAttribute("data-button", "stop");
        refs.swStart.innerText = "stop";
        refs.swLap.setAttribute("data-button", "lap");
        refs.swLap.innerText = "lap";
        stopWatch();
    } else {
        timer = false;
        refs.swStart.setAttribute("data-button", "start");
        refs.swStart.innerText = "start";
        refs.swLap.setAttribute("data-button", "reset");
        refs.swLap.innerText = "reset";
        clearInterval(timerId);
    }
}

function onReset() {
    timer = false;
    clearInterval(timerId);
    ms = 0;
    sec = 0;
    min = 0;
    hr = 0;
}

function onLap() {
    let attr = refs.swLap.getAttribute("data-button");
    
    if (attr === "reset") {
        refs.swLap.disabled = true;
        refs.swLap.setAttribute("data-button", "lap");
        refs.swLap.innerText = "lap";

        refs.swMs.innerText = "00";
        refs.swSec.innerText = "00";
        refs.swMin.innerText = "00";
        refs.swHour.innerText = "00";

        refs.swRes.innerText = "";
        onReset();
    } else {
        const li = `
            <li> ${refs.swHour.innerText} : ${refs.swMin.innerText} : ${refs.swSec.innerText} : ${refs.swMs.innerText}</li>
    `;
        refs.swRes.insertAdjacentHTML("beforeend", li);
    }
}

function stopWatch() {
    return timerId = setInterval(() => {
        if (timer) {
            ms++;
            if (ms == 100) {
                sec++;
                ms = 0;
            }
            if (sec == 60) {
                min++;
                sec = 0;
            }
            if (min == 60) {
                hr++;
                min = 0;
                sec = 0;
            }
            refs.swMs.innerText = addZeroes(ms);
            refs.swSec.innerText = addZeroes(sec);
            refs.swMin.innerText = addZeroes(min);
            refs.swHour.innerText = addZeroes(hr);
        }
    }, 10);
}


function addZeroes(num) {
    if (num < 10) {
        num = `0${num}`;
    }
    return num;
}