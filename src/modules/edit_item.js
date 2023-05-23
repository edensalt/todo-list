import RenderToDoList from '../components/list';
import HomePage from '../pages/homepage';
import { masterList } from './create_list_item';
import { createProject, masterProjectList } from './create_project';

const addTextInput = function (container, type, item, param, current) {
  const parent = container;
  parent.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('flex', 'gap-1', 'items-center');
  const field = document.createElement('input');
  field.type = type;
  field.placeholder = current;
  field.setAttribute('id', 'new-value');
  field.classList.add('w-full', 'h-full', 'bg-transparent');

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '&check;';
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newValue = document.querySelector('#new-value').value;
    const exists = masterProjectList.some((project) => project.project === newValue);
    if (param === 'project' && !exists) {
      createProject(newValue);
    }
    item[param] = newValue;
    const main = document.querySelector('#main');
    main.innerHTML = '';
    HomePage();
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.innerHTML = 'X';
  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    RenderToDoList();
  });

  parent.appendChild(form);
  form.appendChild(field);
  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);

  return form;
};

const editItem = function (e) {
  const container = e.target;
  const index = e.target.parentNode.getAttribute('index');
  const item = masterList[index];
  const param = e.target.getAttribute('param');
  const current = item[param];

  addTextInput(container, 'text', item, param, current);
};

//

const addNumberInput = function (container, type, item, param, current) {
  const parent = container;
  parent.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('flex', 'gap-1', 'items-center');
  const field = document.createElement('input');
  field.type = type;
  field.placeholder = current;
  field.setAttribute('id', 'new-value');
  field.classList.add('w-full', 'h-full', 'bg-transparent');

  const datalist = document.createElement('datalist');
  datalist.id = 'priority-list';
  const option1 = document.createElement('option');
  option1.value = 1;
  const option2 = document.createElement('option');
  option2.value = 2;
  const option3 = document.createElement('option');
  option3.value = 3;

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '&check;';
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newValue = parseFloat(document.querySelector('#new-value').value);
    item[param] = newValue;
    RenderToDoList();
    return masterList;
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.innerHTML = 'X';
  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    RenderToDoList();
  });

  parent.appendChild(form);
  form.appendChild(field);
  form.appendChild(datalist);
  datalist.appendChild(option1);
  datalist.appendChild(option2);
  datalist.appendChild(option3);
  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);

  return form;
};

const editNumber = function (e) {
  const container = e.target;
  const index = e.target.parentNode.getAttribute('index');
  const item = masterList[index];
  const param = e.target.getAttribute('param');
  const current = item[param];

  addNumberInput(container, 'tel', item, param, current);
  return masterList;
};

//

const addDateInput = function (container, type, item, param, current) {
  const parent = container;
  parent.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('grid', 'rows-2', 'cols-2');
  const field = document.createElement('input');
  field.type = type;
  field.placeholder = current;
  field.setAttribute('id', 'new-value');
  field.classList.add('w-full', 'h-full', 'col-span-2', 'bg-transparent');

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '&check;';
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#new-value').value;
    const selectedDate = new Date(input);
    const newValue = new Date(selectedDate.toLocaleString([], { timeZone: 'UTC' }));
    item[param] = newValue;
    RenderToDoList();
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.innerHTML = 'X';
  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    RenderToDoList();
  });

  parent.appendChild(form);
  form.appendChild(field);
  form.appendChild(submitBtn);
  form.appendChild(cancelBtn);

  return form;
};

const editDate = function (e) {
  const container = e.target;
  const index = e.target.parentNode.getAttribute('index');
  const item = masterList[index];
  const param = e.target.getAttribute('param');
  const current = item[param];

  addDateInput(container, 'date', item, param, current);
  return masterList;
};

export { editItem, editNumber, editDate };
