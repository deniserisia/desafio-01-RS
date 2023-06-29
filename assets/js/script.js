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
  
  // Obtenha o elemento do iframe
  var videoPlayer = document.getElementById("youtube-video");
  
  // Adicione um ouvinte de evento para detectar quando o vídeo termina
  videoPlayer.addEventListener("ended", function () {
    // Reinicie o vídeo definindo a propriedade "src" novamente
    videoPlayer.src = "https://www.youtube.com/embed/6M9nM2aVj8k?autoplay=1";
  });
  
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
  
    // sticky header
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
  