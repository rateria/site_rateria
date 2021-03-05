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