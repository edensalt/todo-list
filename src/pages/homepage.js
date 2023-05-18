import LeftSideBar from '../page_sections/left_sidebar';
import MainContent from '../page_sections/main_content';

const HomePage = function () {
  const main = document.querySelector('#main');

  const leftSideBar = document.createElement('div');
  leftSideBar.setAttribute('id', 'left-sidebar');
  leftSideBar.classList.add('basis-1/3');

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.classList.add('basis-2/3');

  main.appendChild(leftSideBar);
  main.appendChild(mainContent);

  leftSideBar.appendChild(LeftSideBar());

  mainContent.appendChild(MainContent());
};

export default HomePage;
