import removeItem from '../modules/remove_list_item';
import { masterList } from '../modules/create_list_item';
import RenderToDoList from './list';

function addDoneBtn(item, card) {
  const btn = document.createElement('button');
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="fill-white" height="18" viewBox="0 96 960 960" width="18"><path d="M378 834 130 586l68-68 180 180 383-383 68 68-451 451Z"/></svg>Complete';
  btn.setAttribute('id', 'task-complete');
  btn.classList.add('border-box', 'flex', 'justify-center', 'gap-1', 'p-2', 'text-white', 'text-sm', 'font-semibold', 'rounded-md', 'bg-emerald-700', 'shadow-sm', 'hover:bg-emerald-600', 'focus-visible:outline', 'focus-visible:outline-2', 'focus-visible:outline-offset-2', 'focus-visible:outline-indigo-600');
  const index = masterList.indexOf(item);
  btn.setAttribute('index', index);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    removeItem(e);
    RenderToDoList();
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
  const para = document.createElement('p');
  para.innerHTML = item.dueDate;
  para.classList.add('item');
  card.appendChild(para);
}

export {
  addDoneBtn, addTitle, addDescription, addProject, addPriority, addDueDate,
};
