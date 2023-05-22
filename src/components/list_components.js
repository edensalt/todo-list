import removeItem from '../modules/remove_list_item';
import { masterList } from '../modules/create_list_item';
import RenderToDoList from './list';
import { completeItem, incompleteItem } from '../modules/complete_list_item';

function addCompleteBtn(item, card) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'task-complete');
  btn.classList.add('fill-black', 'hover:fill-emerald-600');
  const index = masterList.indexOf(item);
  btn.setAttribute('index', index);
  if (item.status === 'incomplete') {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Z"/></svg>`;
  } else btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h600q14 0 25.5 6t18.5 14l-44 44v-4H180v600h600V533l60-60v403q0 24.75-17.625 42.375T780 936H180Zm281-168L239 546l42-42 180 180 382-382 42 42-424 424Z"/></svg>`;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (item.status === 'incomplete') {
      completeItem(e);
    } else incompleteItem(e);
    RenderToDoList();

    // Currently logic for deleting. Instead, update to logic for marking as complete.
  });
  card.appendChild(btn);
}

// Delete button
function addDeleteBtn(item, card) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'task-complete');
  const index = masterList.indexOf(item);
  btn.setAttribute('index', index);
  btn.classList.add('fill-black');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index=${index} class="hover:fill-red-600" height="18" viewBox="0 96 960 960" width="18"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`;
  btn.setAttribute('index', index);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Currently logic for deleting. Instead, update to logic for marking as complete.
    removeItem(e);
    RenderToDoList();
  });
  card.appendChild(btn);
}

function addEditBtn(item, card) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'edit-task');
  btn.classList.add('fill-black', 'hover:fill-emerald-600', 'flex', 'justify-center');
  const index = masterList.indexOf(item);
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M187 877h32l435-437-32-32-435 437v32Zm610-479L665 266l21-22q28-28 66.5-28.5T819 242l18 18q23 22 20.5 51T835 360l-38 38Zm-41 41L247 948H115V816l508-508 133 131Zm-117-15-17-16 32 32-15-16Z"/></svg>`;
  btn.setAttribute('index', index);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Edit task
  });
  card.appendChild(btn);
}

function addTitle(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.title;
  para.classList.add('item');
  card.appendChild(para);
}

function addDescription(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.description;
  para.classList.add('item');
  card.appendChild(para);
}

function addProject(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.project;
  para.classList.add('item');
  card.appendChild(para);
}

function addPriority(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.priority;
  para.classList.add('item');
  para.classList.add('item');
  card.appendChild(para);
}

function addDueDate(item, card) {
  const { format } = require('date-fns');
  const para = document.createElement('p');
  para.innerHTML = format(item.dueDate, 'MM/dd/yy');
  para.classList.add('item');
  card.appendChild(para);
}

export {
  addCompleteBtn, addDeleteBtn, addEditBtn, addTitle, addDescription, addProject, addPriority, addDueDate,
};
