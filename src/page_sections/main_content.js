import AddItemForm from '../components/form';
import RenderToDoList from '../components/list';

const MainContent = function () {
  const parent = document.querySelector('#main-content');

  const items = document.createElement('div');
  items.setAttribute('id', 'items');
  items.classList.add('bg-yellow-100', 'border-2');

  const itemsHeader = document.createElement('h2');
  itemsHeader.setAttribute('id', 'items-header');
  itemsHeader.classList.add('text-2xl', 'font-bold', 'flex', 'justify-center', 'py-10');
  itemsHeader.innerHTML = 'Items';

  const itemsContainer = document.createElement('div');
  itemsContainer.setAttribute('id', 'items-container');

  parent.appendChild(items);
  items.appendChild(itemsHeader);
  items.appendChild(AddItemForm());
  items.appendChild(itemsContainer);
  itemsContainer.appendChild(RenderToDoList());

  return items;
};

export default MainContent;
