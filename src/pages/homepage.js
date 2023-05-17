import RenderToDoList from '../components/list';
import toAddItem from '../navigation';

const HomePage = function () {
  function addItemBtn() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Add an item';
    btn.setAttribute('id', 'add-item-btn');
    return btn;
  }

  const main = document.querySelector('#main');
  main.appendChild(addItemBtn());

  toAddItem();
  RenderToDoList();
};

export default HomePage;
