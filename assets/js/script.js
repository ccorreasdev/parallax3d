const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;
let rotateDegree = 0;
let rotateSpeed = 0;
let timeline = gsap.timeline();

window.addEventListener("mousemove", (e) => {
    if (timeline.isActive()) return;


    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2) * 20);

    parallax_el.forEach((el) => {
        xSpeed = el.dataset["speedx"];
        ySpeed = el.dataset["speedy"];
        zSpeed = el.dataset["speedz"];
        rotateSpeed = el.dataset["rotation"]
        let isInLeft = parseFloat(getComputedStyle(el).left) < (window.innerWidth / 2) ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        console.log(xSpeed)
        el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * xSpeed}px)) translateY(calc(-50% + ${-yValue * ySpeed}px)) perspective(2300px) translateZ(${zValue * zSpeed}px)`;
    })
})



Array.from(parallax_el).filter((el) => !el.classList.contains("text")).forEach((el) => {
    timeline.from(el, {
        top: `${el.offsetHeight / 2 + el.dataset["distance"]}px`,
        duration: 2,
        ease: "power3.out",
    },
        "1"
    );
})

timeline.from(".text h1", {
    y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
    duration: 2,
},
    "2.5"
);

timeline.from(".text h2", {
    y: -150,
    opacity: 0,
    duration: 1.5,
},
    "3"
);

timeline.from(".hide", {
    opacity: 0,
    duration: 1.5,
},
    "3.5"
);