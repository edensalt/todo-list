import { createFormField, createDataList, createSubmitBtn } from './form_components';
import { createItem, masterList } from '../modules/create_list_item';
import RenderToDoList from './list';

const ItemForm = function createForm() {
  const container = document.querySelector('#form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'item-form');

  container.appendChild(form);

  createFormField(form, 'text', 'title', 'title', 'task title here');
  createFormField(form, 'text', 'description', 'description', 'task description here');
  createFormField(form, 'text', 'project', 'project', 'project here');
  createDataList(form, 'priority-list', 'priority', 'priority', 'tel', 1, 2, 3);
  createFormField(form, 'date', 'due-date', 'due-date', '');
  createSubmitBtn(form, 'submit', 'submit-button', 'Add item');
};

function resetList() {
  const listContainer = document.querySelector('#list-container');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
}

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
    resetList();
    RenderToDoList();
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
