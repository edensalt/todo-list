import { createFormField, createDataList, createSubmitBtn } from './form_components';
import { createItem } from '../modules/create_list_item';
import RenderToDoList from './list';

const ItemForm = function () {
  const container = document.querySelector('#form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'item-form');
  form.classList.add('grid', 'grid-cols-list', 'gap-list');

  container.appendChild(form);

  createFormField(form, 'text', 'title', 'title', 'task title here');
  createFormField(form, 'text', 'description', 'description', 'task description here');
  createFormField(form, 'text', 'project', 'project', 'project here');
  createDataList(form, 'priority-list', 'priority', 'priority', 'tel', 1, 2, 3);
  createFormField(form, 'date', 'due-date', 'due-date', '');
  createSubmitBtn(form, 'submit', 'submit-button', 'Add item');

  return form;
};

const AddItem = function () {
  const submit = document.querySelector('#submit-button');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const project = document.querySelector('#project').value;
    const priority = document.querySelector('#priority').value;
    const dueDate = document.querySelector('#due-date').value;
    createItem(title, description, project, priority, dueDate);
    const form = document.querySelector('#item-form');
    form.reset();
    RenderToDoList();
  });
};

const AddItemForm = function () {
  const parent = document.querySelector('#items');
  const container = document.createElement('div');
  container.setAttribute('id', 'form-container');
  container.classList.add('mb-10');
  parent.appendChild(container);

  ItemForm();
  AddItem();

  return container;
};

export default AddItemForm;
