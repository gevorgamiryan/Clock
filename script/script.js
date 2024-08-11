let oclock = document.querySelector(".ocklock");

let datTime = document.createElement("div");
datTime.id = "dateTime";

let date = new Date();

let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
datTime.innerText = time;
oclock.append(datTime)




let hours = document.querySelector(".hour");

let mins = document.querySelector(".min");

let seconds = document.querySelector(".sec");




let deg = 6;
let time2 = setInterval(() => {
    date = new Date();


    let s = (date.getMilliseconds() + (date.getSeconds() * 1000)) / 1000 * deg;
    let m = date.getMinutes() * deg;
    let h = 360 / 12 *  date.getHours();


    time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    datTime.innerText = time;


    seconds.style.transform = `rotateZ(${s}deg)`;
    mins.style.transform = `rotateZ(${m}deg)`;
    hours.style.transform = `rotateZ(${h}deg)`;

}, 0);
