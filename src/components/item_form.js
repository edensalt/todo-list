import createFormField from './create_form_field';

const ItemForm = function () {
  const container = document.querySelector('#form-container');

  const form = document.createElement('form');
  form.setAttribute('id', 'item-form');

  container.appendChild(form);

  createFormField(container, 'text', 'title', 'title', 'task title here');
  createFormField(container, 'text', 'description', 'description', 'task description here');
  createFormField(container, 'date', 'due-date', 'due-date', '');
  createFormField(container, 'number', 'priority', 'priority', 2);
};

export default ItemForm;
