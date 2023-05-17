const NavBar = function () {
  const parent = document.querySelector('#parent');

  const navBar = document.createElement('div');
  navBar.setAttribute('id', 'navbar');

  const logo = document.createElement('h1');
  logo.setAttribute('id', 'logo');
  logo.classList.add('text-4xl', 'font-bold', 'flex', 'justify-center', 'py-10');
  logo.innerHTML = 'To-Do List';

  const pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'main');
  pageContent.classList.add('flex');

  parent.appendChild(navBar);
  navBar.appendChild(logo);
  parent.appendChild(pageContent);

  return navBar;
};

export default NavBar;
