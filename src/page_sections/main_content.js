import AddItemForm from '../components/form';
import RenderToDoList from '../components/list';
import RenderListFilters from '../components/list_filters';

const MainContent = function () {
  const parent = document.querySelector('#main-content');

  const items = document.createElement('div');
  items.setAttribute('id', 'items');

  const itemsHeader = document.createElement('h2');
  itemsHeader.setAttribute('id', 'items-header');
  itemsHeader.classList.add('text-2xl', 'flex', 'justify-center', 'py-2', 'font-handwriting');
  itemsHeader.innerHTML = 'Items';

  const itemsContainer = document.createElement('div');
  itemsContainer.setAttribute('id', 'items-container');

  parent.appendChild(items);
  items.appendChild(itemsHeader);
  items.appendChild(AddItemForm());
  items.appendChild(RenderListFilters());
  items.appendChild(itemsContainer);
  itemsContainer.appendChild(RenderToDoList());

  return items;
};

export default MainContent;
