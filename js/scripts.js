const domain = "localhost:5500"; //"rateria.com.br";

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
  const headerContent = document.getElementById("h");
  const headerBase = document.getElementById("hbase");
  if (winScroll != 0) {
    headerContent.classList.add("scrolled");
    headerBase.classList.add("scrolled");
  }
  else {
    headerContent.classList.remove("scrolled");
    headerBase.classList.remove("scrolled");
  }
}

function toggleNavMenu() {
  const nav = document.getElementById("nav");
  if (nav.classList.contains('toggled'))
    nav.classList.remove("toggled");
  else
    nav.classList.add("toggled");
}

function buildHeader() {
  return (
    '<link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/>' +
    '<link rel="stylesheet" type="text/css" href="/css/header.css"/>' +
    '<div id="hbase"></div>' +
    '<div id="h">' +
      '<div id="h-content">' +
          '<a href="http://' + domain + '/"><img id="logo" src="/images/logo-fundo-azul.svg"/></a>' +
          '<h1 id="h-title">RATERIA</h1>' +
          '<div id="nav-button" onclick="toggleNavMenu()"></div>' +
          '<ul id="nav">' +
            '<a href="http://' + domain + '/"><li class="nav-option">Página Inicial</li></a>' +
            '<a href="http://' + domain + '/quem_somos"><li class="nav-option">Quem somos</li></a>' +
            '<a href="http://' + domain + '/apresentacoes"><li class="nav-option">apresentações</li></a>' +
            '<a href="http://' + domain + '/servicos"><li class="nav-option">Nossos serviços</li></a>' +
            '<a href="http://' + domain + '/contato"><li class="nav-option">Fale conosco</li></a>' +
          '</ul>' +
      '</div>' +
    '</div>'
  );
}
