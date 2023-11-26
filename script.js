console.log("hello, pozdrawiam każdego kto tu zajrzał:))");


const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const link = document.querySelector(".link");

function toggleMenu() {
  nav.classList.toggle("nav-mobile");
  button.classList.toggle("menu-button-open");
  link.classList.toggle("link");

  if (button.classList.contains("menu-button-open")) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "menu";
  }
}

button.addEventListener("click", toggleMenu);
