function dropDown() {
  document.getElementById("dropdown-content").classList.toggle("dropdown-show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    if (document.getElementsByClassName("dropdown-content")[0].classList.contains('dropdown-show')) {
      document.getElementsByClassName("dropdown-content")[0].classList.remove('dropdown-show');
    }
  }
}

// JS do dropdown que foi tirado (Talvez ainda possa ser reaproveitado)
