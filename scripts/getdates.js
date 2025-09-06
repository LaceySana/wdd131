const currentyear = document.querySelector("#currentYear");
const lastmodified = document.querySelector("#lastModified");

const today = new Date();
currentyear.innerHTML = new today.getFullYear();