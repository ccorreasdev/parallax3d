const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
        xSpeed = el.dataset["speedx"];
        ySpeed = el.dataset["speedy"];
        console.log(xSpeed)
        el.style.transform = `translateX(calc(-50% + ${-xValue * xSpeed}px)) translateY(calc(-50% + ${-yValue * ySpeed}px))`;
    })
})