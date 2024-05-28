// OPEN BURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

// CLOSE BURGER MENU
const navLink = document.querySelectorAll(".nav-link");

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

// JUMBOTRON MODAL
const modal = document.getElementById("modal");
const btn = document.getElementById("modalButton");
const span = document.getElementsByClassName("close")[0];
const button = document.getElementsByClassName("subscribe")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

button.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// LOGIN MODAL
const modalL = document.getElementById("modalTwo");
const btnL = document.getElementById("modalButtonTwo");
const spanL = document.getElementsByClassName("close-two")[0];
const buttonL = document.getElementsByClassName("login")[0];

btnL.onclick = function () {
  modalL.style.display = "block";
};

spanL.onclick = function () {
  modalL.style.display = "none";
};

buttonL.onclick = function () {
  modalL.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalL) {
    modalL.style.display = "none";
  }
};
