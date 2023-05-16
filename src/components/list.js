import { masterList } from '../modules/list-item';

const RenderToDoList = function () {
  const parent = document.querySelector('#parent');
  const container = document.createElement('div');
  container.setAttribute('id', 'list-container');
  container.innerHTML = masterList;
  parent.appendChild(container);

  return container;
};

export default RenderToDoList;
