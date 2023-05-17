const NavBar = function () {
  const parent = document.querySelector('#parent');

  const navBar = document.createElement('div');
  navBar.setAttribute('id', 'navbar');

  const logo = document.createElement('h1');
  logo.setAttribute('id', 'logo');
  logo.innerHTML = 'To-Do List';

  const pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'main');

  parent.appendChild(navBar);
  navBar.appendChild(logo);
  parent.appendChild(pageContent);

  return navBar;
};

export default NavBar;
