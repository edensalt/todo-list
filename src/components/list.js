import { masterList } from '../modules/list-item';
import {
  addDoneBtn, addTitle, addDescription, addDueDate, addPriority,
} from './list_components';

const RenderToDoList = function () {
  const parent = document.querySelector('#parent');
  const container = document.createElement('div');
  container.setAttribute('id', 'list-container');
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

  return container;
};

export default RenderToDoList;
