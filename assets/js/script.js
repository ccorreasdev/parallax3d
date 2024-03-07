const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;
let rotateDegree = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2) * 20);

    parallax_el.forEach((el) => {
        xSpeed = el.dataset["speedx"];
        ySpeed = el.dataset["speedy"];
        zSpeed = el.dataset["speedz"];
        let isInLeft = parseFloat(getComputedStyle(el).left) < (window.innerWidth / 2) ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        console.log(xSpeed)
        el.style.transform = `rotateY(${rotateDegree}deg) translateX(calc(-50% + ${-xValue * xSpeed}px)) translateY(calc(-50% + ${-yValue * ySpeed}px)) perspective(2300px) translateZ(${zValue * zSpeed}px)`;
    })
})