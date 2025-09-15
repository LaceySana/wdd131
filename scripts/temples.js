// FOOTER

const currentyear = document.querySelector("#currentYear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();


const lastmodified = document.querySelector("#lastModified");

const modifDate = document.lastModified;
lastmodified.innerHTML = `Last Modification: ${modifDate}`;


// HAMBURGER MENU

const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
});