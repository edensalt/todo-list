import Footer from '../page_sections/footer';
import LeftSideBar from '../page_sections/left_sidebar';
import MainContent from '../page_sections/main_content';

const HomePage = function () {
  const main = document.querySelector('#main');

  const leftSideBar = document.createElement('div');
  leftSideBar.setAttribute('id', 'left-sidebar');
  leftSideBar.classList.add('flex-initial', 'w-[300px]', 'bg-gray-100', 'h-screen');

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.classList.add('flex-1', 'bg-gray-50', 'h-screen');

  main.appendChild(leftSideBar);
  main.appendChild(mainContent);

  leftSideBar.appendChild(LeftSideBar());

  mainContent.appendChild(MainContent());

  main.appendChild(Footer());
};

export default HomePage;
