const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;


    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });

});


document.getElementById('scroll-icon').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('aboutmark').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('hero').addEventListener('mouseenter', function () { 
    cursorDot.style.backgroundColor = "white"; 
    cursorOutline.style.borderColor = "white"; 
})

// document.getElementById('section-3').addEventListener('mouseenter')

document.getElementById('about').addEventListener('mouseenter', function () { 
    cursorDot.style.backgroundColor = "black"; 
    cursorOutline.style.borderColor = "black"; 
})


