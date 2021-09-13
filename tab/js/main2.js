document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab-menu a');
  const checked = document.querySelector('.checked');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      checked.classList.remove('checked');
    });
  });
});