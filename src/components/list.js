import { masterList } from '../modules/list_item';
import {
  addDoneBtn, addTitle, addDescription, addDueDate, addPriority,
} from './list_components';

const RenderToDoList = function () {
  const parent = document.querySelector('#parent');
  // Check if list exists. If yes, remove items and re-render. If no, render.
  const container = document.createElement('div');
  container.setAttribute('id', 'list-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  masterList.forEach((item) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'list-item');
    addDoneBtn(card);
    addTitle(item, card);
    addDescription(item, card);
    addDueDate(item, card);
    addPriority(item, card);
    container.appendChild(card);
  });
  parent.appendChild(container);
  console.table(masterList);

  return container;
};

export default RenderToDoList;
