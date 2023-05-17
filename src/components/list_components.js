import removeItem from '../modules/remove_list_item';
import { masterList } from '../modules/create_list_item';
import RenderToDoList from './list';

function resetList() {
  const listContainer = document.querySelector('#list-container');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
}

function addDoneBtn(item, card) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Complete';
  btn.setAttribute('id', 'task-complete');
  const index = masterList.indexOf(item);
  btn.setAttribute('index', index);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    removeItem(e);
    resetList();
    RenderToDoList();
  });
  card.appendChild(btn);
}

function addTitle(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.title;
  card.appendChild(para);
}

function addDescription(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.description;
  card.appendChild(para);
}

function addDueDate(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.dueDate;
  card.appendChild(para);
}

function addPriority(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.priority;
  card.appendChild(para);
}

export {
  addDoneBtn, addTitle, addDescription, addDueDate, addPriority,
};
