import { masterList } from '../modules/create_list_item';
import {
  addDoneBtn, addTitle, addDescription, addDueDate, addPriority, addProject,
} from './list_components';

const RenderToDoList = function () {
  const parent = document.querySelector('#main');
  // Check if list exists. If yes, remove items and re-render. If no, render.
  const container = document.createElement('div');
  container.setAttribute('id', 'list-container');
  masterList.forEach((item) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'list-item');
    addDoneBtn(item, card);
    addTitle(item, card);
    addDescription(item, card);
    addProject(item, card);
    addPriority(item, card);
    addDueDate(item, card);
    container.appendChild(card);
  });
  parent.appendChild(container);
  console.table(masterList);

  return container;
};

export default RenderToDoList;
