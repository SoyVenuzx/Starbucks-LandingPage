function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

function addActive() {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
    }
  });
}

// function loadPartials() {
//   fetch("../partials/navbar.html")
//     .then((response) => response.text())
//     .then((html) => {
//       document.getElementById("nav-container").innerHTML = html;
//     });
// }

// window.onload = loadPartials();
window.onload = addActive;
