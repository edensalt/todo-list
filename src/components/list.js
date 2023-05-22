import { masterList } from '../modules/create_list_item';
import {
  addDeleteBtn, addTitle, addDescription, addDueDate, addPriority, addProject, addEditBtn, addCompleteBtn,
} from './list_components';

// Define master lists based on filters, e.g.
// masterListComplete = function of completed items, etc (import from filters)

function determineFilter() {
  const main = document.querySelector('#main');
  const filterStatus = main.getAttribute('filter');
  if (filterStatus === undefined || filterStatus === null || filterStatus === 'all') {
    return masterList;
  }
  const filteredMasterList = masterList.filter((item) => item.status === filterStatus);
  return filteredMasterList;
}

const RenderToDoList = function () {
  const list = determineFilter();
  const parent = document.querySelector('#items-container');
  parent.innerHTML = '';
  const container = document.createElement('div');
  container.setAttribute('id', 'items-list');
  container.classList.add('py-2', 'bg-sky-100');
  list.forEach((item) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'list-item');
    const index = list.indexOf(item);
    card.setAttribute('index', index);
    card.classList.add('grid', 'grid-cols-list', 'gap-2', 'items-center', 'my-2', 'text-sm', 'bg-slate-50', 'px-8');
    addCompleteBtn(item, card);
    addTitle(item, card);
    addDescription(item, card);
    addProject(item, card);
    addPriority(item, card);
    addDueDate(item, card);
    addEditBtn(item, card);
    addDeleteBtn(item, card);
    if (item.status === 'complete') {
      card.classList.add('text-gray-400', 'fill-gray-400', 'bg-gray-200');
    }
    container.appendChild(card);
  });
  parent.appendChild(container);

  return container;
};

export default RenderToDoList;
