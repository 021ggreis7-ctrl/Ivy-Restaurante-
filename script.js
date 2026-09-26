// Ivy Restaurante — script.js
// Controla apenas a abertura/fechamento do menu no celular.

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (!menuToggle || !nav) return;

  function fecharMenu() {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', function () {
    const aberto = nav.classList.toggle('open');
    menuToggle.classList.toggle('open', aberto);
    menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', fecharMenu);
  });
});