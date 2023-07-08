// add localstorage
const formContato = document.querySelector("#form-control");
const mensagemElement = document.querySelector("#mensagem");
const listaDadosElement = document.querySelector("#lista-dados");
const limparDadosButton = document.querySelector("#limpar-dados");
const messagesKey = "mensagens";

formContato.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const campoInput = document.querySelector("#campo");

  const mensagem = {
    name: nameInput.value,
    email: emailInput.value,
    campo: campoInput.value,
  };

  const messages = getMensagens();
  messages.push(mensagem);
  salvarMensagens(messages);

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
  localStorage.removeItem(messagesKey);
  listaDadosElement.innerHTML = "";
  limparDadosButton.style.display = "none";
});

function getMensagens() {
  const messagesString = localStorage.getItem(messagesKey);
  if (messagesString) {
    return JSON.parse(messagesString);
  } else {
    return [];
  }
}

function salvarMensagens(messages) {
  const messagesString = JSON.stringify(messages);
  localStorage.setItem(messagesKey, messagesString);
}

function exibirDadosEnviados() {
  listaDadosElement.innerHTML = "";

  const messages = getMensagens();

  if (messages.length === 0) {
    const mensagemSemDados = document.createElement("div");
    mensagemSemDados.textContent = "Nenhuma mensagem encontrada.";
    listaDadosElement.appendChild(mensagemSemDados);
  } else {
    messages.forEach((message) => {
      const dadosMensagem = document.createElement("div");
      dadosMensagem.classList.add("dados-mensagem");
      dadosMensagem.innerHTML = `<strong>Nome:</strong> ${message.name}<br>
                                  <strong>Email:</strong> ${message.email}<br>
                                  <strong>Campo:</strong> ${message.campo}<br>`;
      listaDadosElement.appendChild(dadosMensagem);
    });
  }
}

function exibirBotaoLimpar() {
  limparDadosButton.style.display = "block";
}




// MODAIS
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