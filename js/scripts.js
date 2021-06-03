const domain = "localhost:5500"; //"rateria.com.br";

// Executa no carregamento da página
(function () {
  //Carregamento do cabeçalho
  const header = document.getElementById("header");
  header.innerHTML = buildHeader();

  //Carregamento do rodapé
  const footer = document.getElementById("footer");
  footer.innerHTML = buildFooter();
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
    '<link rel="stylesheet" type="text/css" href="/css/header.css"/>' +
    '<div id="hbase"></div>' +
    '<div id="h">' +
      '<div id="h-content">' +
          '<a href="http://' + domain + '/"><img id="logo" src="/images/logo-fundo-azul.svg"/></a>' +
          '<h1 id="h-title">RATERIA</h1>' +
          '<div id="nav-button" onclick="toggleNavMenu()"></div>' +
          '<ul id="nav">' +
            '<a href="http://' + domain + '/"><li class="nav-option">Página Inicial</li></a>' +
            '<a href="http://' + domain + '/historia"><li class="nav-option">Quem somos</li></a>' +
            '<a href="http://' + domain + '/apresentacoes"><li class="nav-option">apresentações</li></a>' +
            '<a href="http://' + domain + '/repertorio"><li class="nav-option">Repertório</li></a>' +
            '<a href="http://' + domain + '/contato"><li class="nav-option">Fale conosco</li></a>' +
          '</ul>' +
      '</div>' +
    '</div>'
  );
}

function buildFooter() {
  return (
    '<link rel="preconnect" href="https://fonts.gstatic.com" >' +
    '<link rel="stylesheet" type="text/css" href="/css/stylefooter.css"/>' +
    '<link href="https://fonts.googleapis.com/css2?family=Carrois+Gothic&display=swap" rel="stylesheet">' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">' +
    '<hr>' +
    '<div id="container">' +
        '<div class="coluna" style="order: 1;">' +
            '<p class="titulo-coluna"><span class="visivel-desktop">Formas de Contato:</span><span class="visivel-celular">Contatos:</span></p>' +
            '<ul>' +
                '<li class="lista"><a href="https://api.whatsapp.com/send?phone=5511940046444&text=eai%20cuz%C3%A3o" target="_blank"><i class="fab fa-whatsapp"></i>  Whatsapp</a></li>' +
                '<li class="lista"><a href="https://facebook.com/rateria" target="_blank"><i class="fab fa-facebook-square"></i>  Facebook</a></li>' +
                '<li class="lista"><a href="https://instagram.com/rateriapoliusp/" target="_blank"><i class="fab fa-instagram"></i>  Instagram</a></li>' +
            '</ul>' +
        '</div>       ' +
        '<div class="coluna" style="order: 2;">' +
            '<p class="titulo-coluna">Horário de Ensaio:</p>' +
            '<span>Ensaiamos às terças e quintas na praça do relógio</span>' +
        '</div>' +
        '<div class="coluna" style="order: 3;">' +
            '<p class="titulo-coluna">Endereço:</p>' +
            '<a href="https://www.google.com.br/maps/place/Av.+Prof.+Almeida+Prado,+128+-+Butant%C3%A3,+S%C3%A3o+Paulo+-+SP,+05508-070/@-23.5562257,-46.7352853,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce56172c6d03ef:0x7cfa18247a9fe497!8m2!3d-23.5562257!4d-46.7330966" target="_blank">' +
                '<span class="visivel-desktop">Av. Prof. Almeida Prado, 128 - Butantã, São Paulo - SP, 05508-070</span><span class="visivel-celular">Av. Prof. Almeida Prado, 128 - Butantã, São Paulo - SP</span></a>' +
        '</div>' +
    '</div>'
  );
}
