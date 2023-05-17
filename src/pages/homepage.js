import LeftSideBar from '../page_sections/left_sidebar';
import RenderToDoList from '../components/list';
import toAddItem from '../navigation';

const HomePage = function () {
  const main = document.querySelector('#main');

  const leftSideBar = document.createElement('div');
  leftSideBar.setAttribute('id', 'left-sidebar');
  leftSideBar.classList.add('basis-1/3');

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  function addItemBtn() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Add an item';
    btn.setAttribute('id', 'add-item-btn');
    return btn;
  }

  main.appendChild(leftSideBar);
  main.appendChild(mainContent);

  leftSideBar.appendChild(addItemBtn());
  leftSideBar.appendChild(LeftSideBar());

  toAddItem();
  RenderToDoList();
};

export default HomePage;
