// CHANGE THE NAVBAR WHEN SCROLLING
const navbar_scroll = () => {
  document
    .querySelector('nav')
    .classList.toggle('window_scroll', window.scrollY > 0);
};

window.addEventListener('scroll', navbar_scroll);

// JS FUNCTION TO OPEN AND CLOSE THE ANSWER BOXES IN FAQs SECTION
const getFaq = document.querySelectorAll('.faq');

// ADD EVENTLISTENER FOR EACH ELEMENT
getFaq.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.toggle('open');

    // CHANGE ICON
    const icon = elem.querySelector('.faq__icon i');
    icon.className === 'fa-solid fa-plus'
      ? (icon.className = 'fa-solid fa-minus')
      : (icon.className = 'fa-solid fa-plus');
  });
});
