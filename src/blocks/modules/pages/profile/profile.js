const profileItems = document.querySelector('.p-profile__items');
if (profileItems) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    let profileTabs = profileItems.querySelectorAll('.p-profile__tab');
    let profileItem = profileItems.querySelectorAll('.p-profile__item');
  
    profileTabs[1].classList.add('p-profile__tab--active');
    profileItem[1].classList.add('p-profile__item--active');
  
    profileTabs.forEach((item, i, arr) => {
      item.addEventListener('click', (e) => {
        profileTabs.forEach(item => item.classList.remove('p-profile__tab--active'));
        profileItem.forEach(item => item.classList.remove('p-profile__item--active'));
  
        item.classList.add('p-profile__tab--active');
        profileItem[i].classList.add('p-profile__item--active');
      });
    });
  }

  let contactsEditButton = profileItems.querySelector('.p-profile__contacts-button');
  let profileForm = profileItems.querySelector('.p-profile__form');
  let contactsWrapper = profileItems.querySelector('.p-profile__contacts-wrapper');
  
  contactsEditButton.addEventListener('click', (e) => {
    contactsWrapper.style.display = 'none';
    profileForm.style.display = 'grid';
  });
}