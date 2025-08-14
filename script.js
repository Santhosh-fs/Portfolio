// Theme Change
const sunicon = document.querySelector("#theme");
const body = document.getElementsByTagName("body")[0];

function themefun() {
  body.classList.toggle("dark");
  sunicon.classList.add("spin");
  const dark = body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
}
sunicon.addEventListener("click", themefun);

//Store the value in Local Storage
window.addEventListener("DOMContentLoaded", function () {
  const data = this.localStorage.getItem("theme");
  if (data == "dark") {
    body.classList.add("dark");
  } else {
    body.classList.add("light");
  }
});

//  Education Modal Open

const edubtn = document.querySelector(".edubtn");
const modal = document.querySelector(".study");

edubtn.addEventListener("click", function () {
  if (modal.style.display == "block") {
    edubtn.style.color = "green";
    modal.style.display = "none";
  } else {
    edubtn.style.color = "teal";
    modal.style.display = "block";
  }
});

//Menu open

const open = document.querySelector("#menu");
const navItems = document.querySelector("#navul");

open.addEventListener("click", function () {
  if (navItems.style.display == "none") {
    navItems.style.display = "flex";
  } else {
    navItems.style.display = "none";
  }
});

// contact

const btnel = document.querySelector("#cbtn");
const nameel = document.getElementsByClassName("cname")[0];
const emailel = document.getElementsByClassName("cemail")[0];
const textel = document.getElementsByTagName("textarea")[0];
const noteel = document.getElementsByClassName("note")[0];

btnel.addEventListener("click", function (e) {
  e.preventDefault();

  if (!nameel.value || !emailel.value || !textel.value) {
    alert("Fill The Box");
    return;
  } else {
    noteel.style.display = "block";
    clear();
    return;
  }
});

function clear() {
  nameel.value = "";
  emailel.value = "";
  textel.value = "";
}
