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

// 1.
// <div id="myDiv">Привіт світ я артем</div>;

// document.addEventListener("DOMContentLoaded", function () {
//   const myDiv = document.getElementById("myDiv");

//   myDiv.textContent = "Привіт, світ!";
// });
// 2.
// <p class="myClass"> це перший абзац</p>
// <p class="myClass">другий абзац.</p>
// <p class="myClass">третій абзац</p>
//  document.addEventListener("DOMContentLoaded", function() {
//  const paragraphs = document.getElementsByClassName("myClass");
//   if (paragraphs.length > 0) {
//    paragraphs[0].textContent = "Це перший абзац!";
//   }
//  });
//  3.
//   <div id="content">привіт я артем</div>
//    document.addEventListener("DOMContentLoaded", function() {
//  const contentDiv = document.getElementById("content");
//  contentDiv.innerHTML = "Заголовок, Це абзац.";
//  });
// 4.
//    <button id="myButton">highlight</button>

// .highlight {
//  background-color: yellow;
// color: red;
// font-weight: bold;
// }
//  document.addEventListener("DOMContentLoaded", function() {

//  const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function() {
//  myButton.classList.add("highlight");
// });
// });
// 5.
//  <div class="highlight">miau</div>
// .highlight {
// background-color: yellow;
//  color: red;
//  font-weight: bold;
//  }

//  document.addEventListener("DOMContentLoaded", function() {

//  const div = document.querySelector(".highlight");

//  if (div) {
//  div.classList.remove("highlight");
//  }
// });
// 6.
//  <div id="container"></div>
//    document.addEventListener("DOMContentLoaded", function() {

//  const container = document.getElementById("container");

// const newParagraph = document.createElement("p");

//  newParagraph.textContent = "Новий абзац";

// container.appendChild(newParagraph);
// });
// 7.
//  <div id="toRemove">div</div>
// <button id="Button">delete</button>

//   document.addEventListener("DOMContentLoaded", function() {
// const button = document.getElementById("removeButton");
// button.addEventListener("click", function() {
//  const divToRemove = document.getElementById("toRemove");
//  if (divToRemove) {
//  divToRemove.remove();
// }
// });
// });
// 8.
// <input id="myInput" type="text">

//  document.addEventListener("DOMContentLoaded", function() {
// const inputField = document.getElementById("myInput");
//  inputField.setAttribute("placeholder", "Введіть ваше ім'я");
//  });
//  9.
// <button id="clickMe">Натисніть на мене</button>

// document.addEventListener("DOMContentLoaded", function() {
//  const button = document.getElementById("clickMe");
// button.addEventListener("click", function() {
//   alert("Кнопка натиснута!");
//  });
//  });
