import ItemForm from './item_form';

const AddItem = function () {
  const parent = document.querySelector('#parent');
  const container = document.createElement('div');
  container.innerHTML = 'Add a new item';
  container.setAttribute('id', 'form-container');
  parent.appendChild(container);

  ItemForm();

  return container;
};

export default AddItem;
