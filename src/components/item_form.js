import { createFormField, createDataList, createSubmitBtn } from './form_components';
import { createItem, masterList } from '../modules/list-item';

const ItemForm = function () {
  const container = document.querySelector('#form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'item-form');

  container.appendChild(form);

  createFormField(form, 'text', 'title', 'title', 'task title here');
  createFormField(form, 'text', 'description', 'description', 'task description here');
  createFormField(form, 'date', 'due-date', 'due-date', '');
  createDataList(form, 'priority-list', 'priority', 'priority', 'tel', 1, 2, 3);
  createSubmitBtn(form, 'submit', 'submit-button', 'Add item');
};

const AddItem = function () {
  const submit = document.querySelector('#submit-button');
  submit.addEventListener('click', (e) => {
    console.log('submit new task!');
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('#priority').value;
    createItem(title, description, dueDate, priority);
    console.table(masterList);
  });
};

const AddItemForm = function () {
  const parent = document.querySelector('#parent');
  const container = document.createElement('div');
  container.setAttribute('id', 'form-container');
  parent.appendChild(container);

  ItemForm();
  AddItem();

  return container;
};

export default AddItemForm;
