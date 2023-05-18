import { masterList } from '../modules/create_list_item';
import {
  addDoneBtn, addTitle, addDescription, addDueDate, addPriority, addProject,
} from './list_components';

const RenderToDoList = function () {
  const parent = document.querySelector('#items-container');
  parent.innerHTML = '';
  // Check if list exists. If yes, remove items and re-render. If no, render.
  const container = document.createElement('div');
  container.setAttribute('id', 'items-list');
  masterList.forEach((item) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'list-item');
    card.classList.add('grid', 'grid-cols-list', 'gap-list', 'items-center', 'my-[5px]', 'text-sm');
    addTitle(item, card);
    addDescription(item, card);
    addProject(item, card);
    addPriority(item, card);
    addDueDate(item, card);
    addDoneBtn(item, card);
    container.appendChild(card);
  });
  parent.appendChild(container);

  return container;
};

export default RenderToDoList;
