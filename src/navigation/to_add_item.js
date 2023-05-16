import AddItemForm from '../components/item_form';

const toAddItem = function () {
  const addItemBtn = document.querySelector('#add-item-btn');
  addItemBtn.addEventListener('click', () => {
    AddItemForm();
  });
};

export default toAddItem;
