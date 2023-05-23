import RenderToDoList from '../components/list';
import { masterList } from './create_list_item';

const updateField = function () {

};

const addTextInput = function (container, type, index, item, param, current) {
  const parent = container;
  parent.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('flex', 'gap-1');
  const field = document.createElement('input');
  field.type = type;
  field.placeholder = current;
  field.setAttribute('id', 'new-value');
  field.classList.add('w-full');

  field.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement !== field) {
      e.preventDefault();
    }
  });

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '&check;';
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newValue = document.querySelector('#new-value').value;
    console.log(newValue);
    item[param] = newValue;
    console.table(masterList);
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

  addTextInput(container, 'text', index, item, param, current);
  return masterList;
};

export default editItem;
