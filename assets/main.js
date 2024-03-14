// Navigation 
const bar = document.querySelector("#header > div.mobile > i");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

//show navigation bar
if (bar) {
    bar.addEventListener("click", function () {
        nav.classList.add("active");
    });
}

//close navigation bar
if (close) {
    close.addEventListener("click", function () {
        nav.classList.remove("active");
    });
}

//footer year
year=document.querySelector("#contact > div.year > p > span#year").innerHTML = new Date().getFullYear();