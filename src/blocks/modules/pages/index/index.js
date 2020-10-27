const menu = document.querySelector('.menu');
if (menu && window.matchMedia("(max-width: 991px)").matches) {
  let menuButton = menu.querySelector('.menu__button');
  let menuList = menu.querySelector('.menu__list');

  menuButton.addEventListener('click', (e) => {
    let isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menuButton.classList.toggle('menu__button--open');
    menuList.classList.toggle('menu__list--open');
  });
}

const user = document.querySelector('.user');
if (user) {
  const userIsLoggedIn = document.body.classList.contains('logged-in');
  // logged-out
  
  if (userIsLoggedIn) {
    user.classList.remove('user--logged-out');
    user.classList.add('user--logged');
  } else {
    user.classList.remove('user--logged');
    user.classList.add('user--logged-out');
  }
}