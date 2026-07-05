const sliders = document.querySelectorAll('.hero-img');
let current = 0;

sliders[current].classList.add("active");
setInterval(() => {
    sliders[current].classList.remove("active");
    current = (current + 1) % sliders.length;
    sliders[current].classList.add("active");
}, 4000);

