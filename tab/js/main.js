document.addEventListener("DOMContentLoaded",() => {
  const tabs = document.querySelectorAll('.tab-wrapper label');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const contents = document.querySelectorAll('.tab-wrapper .tab-content p');
      contents.forEach(content => {
        content.classList.add('animation-active');
      });
    });
  });
});