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

function buildHeader() {
  return (
    '<link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/>' +
    '<link rel="stylesheet" type="text/css" href="/css/header.css"/>' +
    '<div id="h">' +
      '<div id="h-content">' +
          '<ul id="nav">' +
              '<img id="logo" src="/images/logo-fundo-azul.svg"/>' +
              '<li><h1 id="h-title">RATERIA</h1></li>' +
              '<li><a href="http://localhost:5500/base.html">Página Inicial</a></li>' +
              '<li><a href="http://localhost:5500/quem_somos">Quem somos</a></li>' +
              '<li><a href="http://localhost:5500/apresentacoes">apresentações</a></li>' +
              '<li><a href="">Nossos serviços</a></li>' +
              '<li><a href="">Fale conosco</a></li>' +
          '</ul>' +
      '</div>' +
    '</div>'
  );
}
