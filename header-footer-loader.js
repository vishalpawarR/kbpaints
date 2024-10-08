const header = document.getElementById('header');
const footer = document.getElementById('footer');

function loadHeaderFooter() {
  fetch('./components/header.html')
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
    });

  fetch('./components/footer.html')
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', loadHeaderFooter);
