const AddItem = function () {
  const parent = document.querySelector('#parent');
  const container = document.createElement('div');
  container.innerHTML = 'Add a new item';
  parent.appendChild(container);

  return container;
};

export default AddItem;
