const seeds_section = document.querySelector('.seeds-section');
const toggle_shop = document.querySelector('.toggle-shop');


toggle_shop.addEventListener('click', function (e) {
  seeds_section.classList.toggle('active');
});