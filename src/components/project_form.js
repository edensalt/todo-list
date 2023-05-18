import { createProject, masterProjectList } from '../modules/create_project';
import { createFormField, createSubmitBtn } from './form_components';

const ProjectForm = function () {
  const container = document.querySelector('#projects');

  const form = document.createElement('form');
  form.setAttribute('id', 'project-form');
  form.classList.add('grid', 'grid-cols-2', 'gap-list');

  container.appendChild(form);

  createFormField(form, 'text', 'project-cat', 'project-cat', 'new project');
  createSubmitBtn(form, 'submit', 'proj-submit-button', 'Add project');

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
    console.table(masterProjectList);
    // RenderToDoList();
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
