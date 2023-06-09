import {
  createFormField, createPriorityList, createSubmitBtn, createProjectList,
} from './form_components';
import { createItem } from '../modules/create_list_item';
import { createProject, masterProjectList } from '../modules/create_project';
import HomePage from '../pages/homepage';

const ItemForm = function () {
  const container = document.querySelector('#form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'item-form');
  form.classList.add('grid', 'lg:grid-cols-list', 'grid-cols-smallList', 'grid-wrap', 'gap-1');

  container.appendChild(form);

  const col1 = document.createElement('div');
  form.appendChild(col1);

  createFormField(form, 'text', 'title', 'title', 'task title here');
  createFormField(form, 'text', 'description', 'description', 'task description here');
  createProjectList(form, 'project-list', 'project', 'project');
  createPriorityList(form, 'priority-list', 'priority', 'priority', 'tel');
  createFormField(form, 'date', 'due-date', 'due-date', '');
  createSubmitBtn(form, 'submit', 'submit-button', 'Add item');

  return form;
};

const CheckProject = function () {
  const selectedProject = document.querySelector('#project').value;
  const exists = masterProjectList.some((project) => project.project === selectedProject);
  if (!exists) {
    createProject(selectedProject);
  }
};

const AddItem = function () {
  const submit = document.querySelector('#submit-button');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const project = document.querySelector('#project').value;
    CheckProject();
    const priority = document.querySelector('#priority').value;
    const dueDate = document.querySelector('#due-date').value;
    createItem(title, description, project, priority, dueDate, 'incomplete');
    const form = document.querySelector('#item-form');
    form.reset();
    const main = document.querySelector('#main');
    main.innerHTML = '';
    HomePage();
  });
};

const AddItemForm = function () {
  const parent = document.querySelector('#items');
  const container = document.createElement('div');
  container.setAttribute('id', 'form-container');
  container.classList.add('mb-2', 'px-8', 'py-2');
  parent.appendChild(container);

  ItemForm();
  AddItem();

  return container;
};

export default AddItemForm;
