const NavBar = function () {
  const parent = document.querySelector('#parent');

  const navBar = document.createElement('div');
  navBar.setAttribute('id', 'navbar');

  const title = document.createElement('h1');
  title.setAttribute('id', 'header');
  title.classList.add('text-4xl', 'flex', 'justify-center', 'pt-5', 'font-handwriting', 'w-full');
  title.innerHTML = 'To-Do List';

  const subtitle = document.createElement('h2');
  subtitle.setAttribute('id', 'subheader');
  subtitle.classList.add('text-xl', 'flex', 'justify-center', 'pb-5', 'font-handwriting');
  subtitle.innerHTML = 'You can do this, with to-do list!';

  const pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'main');
  pageContent.classList.add('flex', 'lg:flex-row', 'flex-col');
  pageContent.setAttribute('item-filter', 'all');

  parent.appendChild(navBar);
  navBar.appendChild(title);
  navBar.appendChild(subtitle);
  parent.appendChild(pageContent);

  return navBar;
};

export default NavBar;
