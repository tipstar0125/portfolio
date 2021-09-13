'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById('modal-open');
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});