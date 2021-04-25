function switchNavigationItem() {
  const elementsNavigationList = document.querySelector('.nav__list');
  const navigationItemsArry = elementsNavigationList.querySelectorAll('.nav__link');
  elementsNavigationList.addEventListener ('click', ({target}) => {
    navigationItemsArry.forEach(el => el.classList.remove('nav__link--active'));
    target.classList.toggle('nav__link--active');
  });
};
switchNavigationItem();