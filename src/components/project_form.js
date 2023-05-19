import { createProject } from '../modules/create_project';
import HomePage from '../pages/homepage';
import { createFormField, createSubmitBtn } from './form_components';

const ProjectForm = function () {
  const container = document.querySelector('#proj-form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'project-form');
  form.classList.add('flex', 'flex-wrap', 'gap-2', 'bg-lime-200', 'py-2', 'px-8', 'hover:bg-lime-300');

  container.appendChild(form);

  createFormField(form, 'text', 'project-cat', 'project-cat', 'new project');
  const projectInput = document.querySelector('#project-cat');
  projectInput.classList.add('w-[100px]', 'flex-1', 'rounded-md');

  createSubmitBtn(form, 'submit', 'proj-submit-button', 'Add');
  const projectSubmit = document.querySelector('#proj-submit-button');
  projectSubmit.classList.add('flex-0');

  return form;
};

const AddProject = function () {
  const submit = document.querySelector('#proj-submit-button');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const project = document.querySelector('#project-cat').value;
    createProject(project);
    const form = document.querySelector('#project-form');
    form.reset();
    const main = document.querySelector('#main');
    main.innerHTML = '';
    HomePage();
  });
};

const AddProjectForm = function () {
  const parent = document.querySelector('#projects');
  const container = document.createElement('div');
  container.setAttribute('id', 'proj-form-container');
  container.classList.add('mb-10');
  parent.appendChild(container);

  ProjectForm();
  AddProject();

  return container;
};

export default AddProjectForm;
