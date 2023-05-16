// import { masterList } from '../modules/list-item';

function addDoneBtn(card) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Complete';
  btn.setAttribute('id', 'task-complete');
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
