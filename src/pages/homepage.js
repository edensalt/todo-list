import LeftSideBar from '../page_sections/left_sidebar';
import MainContent from '../page_sections/main_content';

const HomePage = function () {
  const main = document.querySelector('#main');

  const leftSideBar = document.createElement('div');
  leftSideBar.setAttribute('id', 'left-sidebar');
  leftSideBar.classList.add('flex-initial', 'lg:w-[300px]', 'w-full', 'bg-orange-100', 'lg:h-full');

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.classList.add('flex-1', 'bg-orange-100', 'lg:h-full');

  main.appendChild(leftSideBar);
  main.appendChild(mainContent);

  leftSideBar.appendChild(LeftSideBar());

  mainContent.appendChild(MainContent());
};

export default HomePage;
