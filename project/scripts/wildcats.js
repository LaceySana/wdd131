const hamButton = document.getElementById("menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
})

nav.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
})