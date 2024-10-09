const header = document.getElementById('header');
const footer = document.getElementById('footer');
const path = window.location.pathname;
console.log(path);

function loadHeaderFooter() {
  fetch('./components/header.html')
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
      const navLink = document.querySelectorAll('.navLink');

      console.log(navLink);
      navLink.forEach((ele) => {
        const hrefRef = ele.getAttribute('href');
        if (hrefRef === path) {
          ele.classList.add('active');
        }
      });
    });

  fetch('./components/footer.html')
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', loadHeaderFooter);
