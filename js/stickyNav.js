window.onscroll = function() {stickIt()};

var nav = document.getElementById("navigation");
var about = document.getElementById("about");

function stickIt() {
    if (window.pageYOffset > about.offsetTop) {
        nav.classList.add("stickNav");
        nav.classList.remove("navigation");
  } else {
      nav.classList.remove("stickNav");
      nav.classList.add("navigation");
  }
}
