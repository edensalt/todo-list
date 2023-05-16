import AddItem from '../components/add_item';

const toAddItem = function () {
  const addItemBtn = document.querySelector('#add-item-btn');
  addItemBtn.addEventListener('click', () => {
    AddItem();
  });
};

export default toAddItem;
