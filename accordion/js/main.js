document.addEventListener("DOMContentLoaded",() => {
  const title = document.querySelectorAll('.js-accordion-title');
  for (let i = 0; i < title.length; i++){
    let titleEach = title[i];
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
      titleEach.classList.toggle('is-active');
      content.classList.remove('initial');
      content.classList.toggle('is-open');
      const isOpen = content.classList.contains('is-open');
      if (!isOpen) {
        content.classList.add('is-close');
      } else {
        content.classList.remove('is-close');
      }
    });
  }
});