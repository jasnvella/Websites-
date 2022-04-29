//Get the button:
toTop = document.getElementById("backToTop--btn");
question1 = document.querySelector(".Q1");
question2 = document.querySelector(".Q2");
question3 = document.querySelector(".Q3");
answer1 = document.querySelector(".answer1");
answer2 = document.querySelector(".answer2");
answer3 = document.querySelector(".answer3");
span1 = document.querySelector(".span1");
span2 = document.querySelector(".span2");
span3 = document.querySelector(".span3");
submitButton = document.querySelector(".submit-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 50; // For Safari
//   document.documentElement.scrollTop = 50; // For Chrome, Firefox, IE and Opera
// }

question1.addEventListener("click", function () {
  if (answer1.style.display === "none") {
    answer1.style.display = "block";
    span1.innerHTML = "-";
  } else {
    answer1.style.display = "none";
    span1.innerHTML = "+";
  }
});

question2.addEventListener("click", function () {
  if (answer2.style.display === "none") {
    answer2.style.display = "block";

    span2.innerHTML = "-";
  } else {
    answer2.style.display = "none";
    span2.innerHTML = "+";
  }
});

question3.addEventListener("click", function () {
  if (answer3.style.display === "none") {
    answer3.style.display = "block";
    span3.innerHTML = "-";
  } else {
    answer3.style.display = "none";
    span3.innerHTML = "+";
  }
});

/***************************/
/* BURGER MENU  */
/***************************/

const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const list = document.querySelector(".main-nav-list-mob");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    burgerMenu.style.opacity = "100%";
    burgerMenu.style.pointerEvents = "all";
    burgerMenu.style.visibility = "visible";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    burgerMenu.style.opacity = "0%";
    burgerMenu.style.pointerEvents = "none";
    burgerMenu.style.visibility = "hidden";
    menuOpen = false;
  }
});

list.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  burgerMenu.style.opacity = "0%";
  burgerMenu.style.pointerEvents = "none";
  burgerMenu.style.visibility = "hidden";
  menuOpen = false;
});

/***************************/
/* CONTACT FORM  */
/***************************/

let email = document.querySelector(".email");
let error = document.querySelector(".invalid");
let thanks = document.querySelector(".thanks");

submitButton.addEventListener("click", () => {
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-z]){2,8}$/;
  const regexo =
    /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-z]){2,3}\.[a-zA-Z]{1,3}$/;
  if (regex.test(email.value) || regexo.test(email.value)) {
    error.style.display = "none";
    thanks.style.display = "block";
  } else {
    error.style.display = "block";
    thanks.style.display = "none";
  }
});

new WOW().init();
