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

nav.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamButton.classList.toggle("open");
})

// TEMPLE CARDS

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Vernal Utah",
    location: "Vernal, Utah",
    dedicated: "1997, November, 4",
    area: 38771,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-63191-main.jpg"
  },
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York",
    dedicated: "2000, April, 6",
    area: 10900,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg"
  },
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg"
  },
];

const templeNameToID = name => name.split(" ").join("-");

const templeCard = temple => 
    `<div class="temple-card" id="${templeNameToID(temple.templeName)}">
        <h2>${temple.templeName}</h2>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Size:</span> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy" width="200">
    </div>`;

document.querySelector("#photo-div").innerHTML = temples.map(templeCard).join("");

// TEMPLE FILTERING

const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
oldTemples.forEach(temple => document.getElementById(templeNameToID(temple.templeName)).classList.add("old"));

const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
newTemples.forEach(temple => document.getElementById(templeNameToID(temple.templeName)).classList.add("new"));

const largeTemples = temples.filter(temple => temple.area > 90000);
largeTemples.forEach(temple => document.getElementById(templeNameToID(temple.templeName)).classList.add("large"));

const smallTemples = temples.filter(temple => temple.area < 10000);
smallTemples.forEach(temple => document.getElementById(templeNameToID(temple.templeName)).classList.add("small"));

