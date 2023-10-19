// Add functionality to open a popup with the latest news when the "Latest News" button is clicked

// const button = document.querySelector('.latest-news-button');
// const popup = document.querySelector('.news-popup');
// const closeBtn = document.querySelector('.news-popup .close-button');

// button.addEventListener('click', () => {
//   popup.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// Add functionality to highlight the phone and email when the "Contact" button is clicked

const contactButton = document.querySelector('nav ul li:nth-child(4) a');
const phone = document.querySelector('.section:nth-child(4) p:first-child');
const email = document.querySelector('.section:nth-child(4) p:last-child');

contactButton.addEventListener('click', () => {
  phone.classList.add('highlight');
  email.classList.add('highlight');
});

// const servicesButton = document.querySelector('nav ul li:nth-child(2) a');

// servicesButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   window.location.href = "services.html";
// });

// const doctorsButton = document.querySelector('nav ul li:nth-child(3) a')