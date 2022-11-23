const ratingContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".thanks");
const submitButton = document.querySelector(".button__submit");
const rating = document.getElementById("rating-result");
const rates = document.querySelectorAll(".grade");

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    ratingContainer.style.display = "none";
})

rates.forEach(element => {
    element.addEventListener("click", () => {
        rating.textContent = element.textContent;
    })
});