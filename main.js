function switchNavigationItem() {
  const elementsNavigationList = document.querySelector('.nav__list');
  const navigationItemsArry = elementsNavigationList.querySelectorAll('.nav__link');
  elementsNavigationList.addEventListener ('click', ({target}) => {
    if (target.className === 'nav__link') {
      navigationItemsArry.forEach(el => el.classList.remove('nav__link--active'));
      target.classList.add('nav__link--active');
      console.log(target.className);
    }
  });
};
switchNavigationItem();