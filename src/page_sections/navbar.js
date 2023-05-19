const NavBar = function () {
  const parent = document.querySelector('#parent');

  const navBar = document.createElement('div');
  navBar.setAttribute('id', 'navbar');

  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.classList.add('text-5xl', 'flex', 'justify-center', 'pt-10', 'pb-5', 'font-handwriting');
  title.innerHTML = 'To-Do List';

  const subtitle = document.createElement('h2');
  subtitle.setAttribute('id', 'subtitle');
  subtitle.classList.add('text-2xl', 'flex', 'justify-center', 'pb-10', 'font-handwriting');
  subtitle.innerHTML = 'You can do this, with to-do list!';

  const pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'main');
  pageContent.classList.add('flex');

  parent.appendChild(navBar);
  navBar.appendChild(title);
  navBar.appendChild(subtitle);
  parent.appendChild(pageContent);

  return navBar;
};

export default NavBar;
