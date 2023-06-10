const btnEl = document.getElementById("menu-icon-trigger");
const headerEl = document.querySelector(".header");
btnEl.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".menu-icon-wrapper").classList.toggle("open");
    headerEl.classList.toggle("open");
});