
const reviewsDisplay = document.getElementById("num-reviews");
const plural = document.querySelector(".plural");

let totalReviews = Number(localStorage.getItem("totalReviews")) || 0;
totalReviews++;

if (totalReviews !== 1) {
    plural.textContent = "s";
}

reviewsDisplay.textContent = totalReviews;
localStorage.setItem("totalReviews", totalReviews);
