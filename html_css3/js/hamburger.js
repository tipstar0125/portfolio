document.addEventListener('DOMContentLoaded',() => {
  const hamburger = document.getElementById('hamburger')
  const nav = document.getElementById('nav-container')
  const header__wrapper = document.getElementsByClassName('header__wrapper')[0]
  const header__left = document.getElementsByClassName('header__left')[0]
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    header__wrapper.classList.toggle('active');
    header__left.classList.toggle('active');
  });
});