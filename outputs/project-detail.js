const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const modal = document.querySelector('[data-image-modal]');
const modalImage = modal?.querySelector('img');

document.querySelectorAll('[data-preview-image]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!modal || !modalImage) return;
    modalImage.src = button.getAttribute('data-preview-image');
    modalImage.alt = button.getAttribute('data-preview-alt') || '项目图片预览';
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
  });
});

modal?.addEventListener('click', () => {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
});
