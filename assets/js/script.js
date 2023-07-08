// add localstorage
const formContato = document.querySelector("#form-control");
const mensagemElement = document.querySelector("#mensagem");
const listaDadosElement = document.querySelector("#lista-dados");
const limparDadosButton = document.querySelector("#limpar-dados");

formContato.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const campoInput = document.querySelector("#campo");

  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("campo", campoInput.value);

  nameInput.value = "";
  emailInput.value = "";
  campoInput.value = "";

  mensagemElement.textContent = "Seus dados foram enviados com sucesso!";
  mensagemElement.classList.add("show");

  setTimeout(() => {
    mensagemElement.classList.remove("show");
  }, 3000);

  exibirDadosEnviados();
  exibirBotaoLimpar();
});

limparDadosButton.addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("campo");

  listaDadosElement.innerHTML = "";
  limparDadosButton.style.display = "none";
});

function exibirDadosEnviados() {
  listaDadosElement.innerHTML = "";

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const campo = localStorage.getItem("campo");

  const dadosEnviados = document.createElement("div");
  dadosEnviados.innerHTML = `<strong>Nome:</strong> ${name}<br>
                              <strong>Email:</strong> ${email}<br>
                              <strong>Campo:</strong> ${campo}<br>`;

  listaDadosElement.appendChild(dadosEnviados);
}

function exibirBotaoLimpar() {
  limparDadosButton.style.display = "block";
}

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