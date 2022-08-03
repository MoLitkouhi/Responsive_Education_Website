// CHANGE THE NAVBAR WHEN SCROLLING
const navbar_scroll = () => {
  document
    .querySelector('nav')
    .classList.toggle('window_scroll', window.scrollY > 0);
};

window.addEventListener('scroll', navbar_scroll);
