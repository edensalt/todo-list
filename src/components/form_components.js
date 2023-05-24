import { masterProjectList } from '../modules/create_project';

const createFormField = function (container, type, id, name, placeholder) {
  const field = document.createElement('input');
  field.type = type;
  field.classList.add('form-item');
  field.id = id;
  field.name = name;
  field.placeholder = placeholder;

  container.appendChild(field);
};

const createPriorityList = function (
  container,
  list,
  name,
  id,
) {
  const field = document.createElement('select');
  field.setAttribute('list', list);
  field.name = name;
  field.id = id;
  field.classList.add('form-item', 'gap-0');
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Priority';
  const option1 = document.createElement('option');
  option1.value = 1;
  option1.textContent = '1';
  const option2 = document.createElement('option');
  option2.value = 2;
  option2.textContent = '2';
  const option3 = document.createElement('option');
  option3.value = 3;
  option3.textContent = '3';

  container.appendChild(field);
  field.appendChild(placeholder);
  field.appendChild(option1);
  field.appendChild(option2);
  field.appendChild(option3);
};

const createProjectList = function (
  container,
  list,
  name,
  id,
  type,
) {
  const field = document.createElement('select');
  field.setAttribute('list', list);
  field.name = name;
  field.id = id;
  field.classList.add('form-item', 'gap-0');
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Project';
  container.appendChild(field);
  field.appendChild(placeholder);
  masterProjectList.forEach((project) => {
    const option = document.createElement('option');
    option.value = project.project;
    option.textContent = project.project;
    field.appendChild(option);
  });
};

const createSubmitBtn = function (container, type, id, innerHTML) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.id = id;
  btn.innerHTML = innerHTML;
  btn.classList.add('btn-complete');
  container.appendChild(btn);
};

export {
  createFormField, createPriorityList, createSubmitBtn, createProjectList,
};
