// Executa no carregamento da página
(function () {
  //Carregamento do cabeçalho
  const header = document.getElementById("header");
  header.innerHTML = buildHeader();
})();

function dropDown() {
  var x = document.getElementById("dropdown-content");
  if (x.className.indexOf("dropdown-show") == -1) { 
    x.className += " dropdown-show";
  } else {
    x.className = x.className.replace(" dropdown-show", "");
  }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

window.onscroll = function() {
  var winScroll = document.documentElement.scrollTop;
  if (winScroll != 0)
      $("#h").addClass("scrolled");
  else
      $("#h").removeClass("scrolled");
}

function toggleNavMenu() {
  const nav = document.getElementById("nav");
  nav.classList.contains('toggled')
  if (nav.classList.contains('toggled'))
    nav.classList.remove("toggled");
  else
    nav.classList.add("toggled");
}

function buildHeader() {
  return (
    '<link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/>' +
    '<link rel="stylesheet" type="text/css" href="/css/header.css"/>' +
    '<div id="h">' +
      '<div id="h-content">' +
          '<img id="logo" src="/images/logo-fundo-azul.svg"/>' +
          '<h1 id="h-title">RATERIA</h1>' +
          '<div id="nav-button" onclick="toggleNavMenu()"></div>' +
          '<ul id="nav">' +
            '<a href="http://192.168.0.12:5500/base.html"><li class="nav-option">Página Inicial</li></a>' +
            '<a href="http://192.168.0.12:5500/quem_somos"><li class="nav-option">Quem somos</li></a>' +
            '<a href="http://192.168.0.12:5500/apresentacoes"><li class="nav-option">apresentações</li></a>' +
            '<a href="http://192.168.0.12:5500/servicos"><li class="nav-option">Nossos serviços</li></a>' +
            '<a href="http://192.168.0.12:5500/contato"><li class="nav-option">Fale conosco</li></a>' +
          '</ul>' +
      '</div>' +
    '</div>'
  );
}
