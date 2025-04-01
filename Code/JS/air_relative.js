// const wave = document.getElementsByClassName("wave");
const wave = document.querySelectorAll(".wave");
const triggerDesktop = 2118.5;
const triggerMobile = 1584;
const triggerSize = 820;
let mobile = 0;

const scrollAction = (trigger) => {
    window.onscroll = () => {
        if (window.scrollY > trigger) {
            wave.forEach(element => element.style.position = "fixed");
        } else {
            wave.forEach(element => element.style.position = "absolute");
        }
    }
}


window.onresize = () => {
    let w = window.innerWidth;
    if (w < triggerSize) {
        console.log("mobile");
        scrollAction(triggerMobile);
    } else {
        console.log("desktop");
        scrollAction(triggerDesktop);
    }
};
