import { masterList } from '../modules/list-item';
import { addDoneBtn, addTitle } from './list_components';

const RenderToDoList = function () {
  const parent = document.querySelector('#parent');
  const container = document.createElement('div');
  container.setAttribute('id', 'list-container');
  masterList.forEach((item) => {
    addDoneBtn(container);
    addTitle(item, container);
    parent.appendChild(container);
  });

  return container;
};

export default RenderToDoList;
