const filters = document.querySelectorAll('.filter');
const galleryCards = document.querySelectorAll('.gallery-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const category = button.dataset.filter;
  galleryCards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const opened = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(opened));
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
