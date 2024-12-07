const menuButton = document.querySelector("#burger");
const burgerMenu = document.querySelector(".menu1");
menuButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("hidden");
});
const menuButton2 = document.querySelector("#burger2");
const burgerMenu2 = document.querySelector(".menu2");
menuButton2.addEventListener("click", () => {
  burgerMenu2.classList.toggle("hidden");
});
const menuButton3 = document.querySelector("#burger3");
const burgerMenu3 = document.querySelector(".menu3");
menuButton3.addEventListener("click", () => {
  burgerMenu3.classList.toggle("hidden");
});
const menuButton4 = document.querySelector("#burger4");
const burgerMenu4 = document.querySelector(".menu4");
menuButton4.addEventListener("click", () => {
  burgerMenu4.classList.toggle("hidden");
});

const searchButton = document.querySelector("#search-button");
const searchBar = document.querySelector("#input");

searchButton.addEventListener("click", () => {
  searchBar.classList.toggle("hidden");
});
