import removeItem from '../modules/remove_list_item';
import { masterList } from '../modules/create_list_item';
import RenderToDoList from './list';
import { completeItem, incompleteItem } from '../modules/complete_list_item';
import { editDate, editItem, editNumber } from '../modules/edit_item';
import DateConversion from '../modules/date_conversion';

function addCompleteBtn(item, card) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'task-complete');
  btn.classList.add('fill-black', 'hover:fill-sky-600');
  const index = masterList.indexOf(item);
  btn.setAttribute('index', index);
  if (item.status === 'incomplete') {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Z"/></svg>`;
  } else { btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h600q14 0 25.5 6t18.5 14l-44 44v-4H180v600h600V533l60-60v403q0 24.75-17.625 42.375T780 936H180Zm281-168L239 546l42-42 180 180 382-382 42 42-424 424Z"/></svg>`; }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (item.status === 'incomplete') {
      completeItem(e);
    } else incompleteItem(e);
    RenderToDoList();
  });
  card.appendChild(btn);
}

// Delete button
function addDeleteBtn(item, card) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'task-complete');
  const index = masterList.indexOf(item);
  btn.setAttribute('index', index);
  btn.classList.add('fill-black', 'mx-auto');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index=${index} class="hover:fill-red-600" height="18" viewBox="0 96 960 960" width="18"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`;
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
  para.setAttribute('param', 'title');
  para.classList.add('item', 'rounded-none', 'hover:bg-white/50');
  para.addEventListener('click', (e) => {
    e.preventDefault();
    const targetParam = e.target.getAttribute('param');
    if (targetParam === 'title') {
      editItem(e);
    }
  });
  card.appendChild(para);
}

function addDescription(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.description;
  para.setAttribute('param', 'description');
  para.classList.add('item', 'rounded-none', 'h-full', 'hover:bg-white/50');
  para.addEventListener('click', (e) => {
    e.preventDefault();
    const targetParam = e.target.getAttribute('param');
    if (targetParam === 'description') {
      editItem(e);
    }
  });
  card.appendChild(para);
}

function addProject(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.project;
  para.setAttribute('param', 'project');
  para.classList.add('item', 'rounded-none', 'hover:bg-white/50');
  para.addEventListener('click', (e) => {
    const targetParam = e.target.getAttribute('param');
    if (targetParam === 'project') {
      editItem(e);
    }
  });
  card.appendChild(para);
}

function addPriority(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.priority;
  para.setAttribute('param', 'priority');
  para.classList.add('item', 'rounded-none', 'hover:bg-white/50');
  para.addEventListener('click', (e) => {
    const targetParam = e.target.getAttribute('param');
    if (targetParam === 'priority') {
      editNumber(e);
    }
  });
  card.appendChild(para);
}

function addDueDate(item, card) {
  const para = document.createElement('p');
  const date = item.dueDate;
  const formattedDate = DateConversion(date);
  para.innerHTML = formattedDate;
  para.setAttribute('param', 'dueDate');
  para.classList.add('item', 'rounded-none', 'hover:bg-white/50');
  para.addEventListener('click', (e) => {
    const targetParam = e.target.getAttribute('param');
    if (targetParam === 'dueDate') {
      editDate(e);
    }
  });
  card.appendChild(para);
}

export {
  addCompleteBtn,
  addDeleteBtn,
  addTitle,
  addDescription,
  addProject,
  addPriority,
  addDueDate,
};
