import RenderToDoList from '../components/list';
import { masterList } from './create_list_item';

const cancelEdit = function () {

};

const addTextInput = function (container, item, param, current) {
  const parent = container;
  parent.innerHTML = '';

  const form = document.createElement('form');
  form.classList.add('flex', 'gap-1');
  const field = document.createElement('input');
  field.type = 'text';
  field.placeholder = current;
  field.classList.add('w-full');

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '&check;';

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
  console.log(index);
  console.log(item);
  console.log(param);
  console.log(current);
  addTextInput(container, item, param, current);
  return masterList;
};

export default editItem;
