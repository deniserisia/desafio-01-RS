function openModal(button) {
  const column = button.closest(".column");
  const modal = column.querySelector(".modal-container");
  modal.classList.add("active");
}

function closeModal(button) {
  const column = button.closest(".column");
  const modal = column.querySelector(".modal-container");
  modal.classList.remove("active");
}


// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);
};

function btnMobile() {
  const btnMenu = document.getElementById("menu-mob");
  const menuMobile = document.getElementById("menu-mobile");
  btnMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("active");

  });
}
btnMobile();