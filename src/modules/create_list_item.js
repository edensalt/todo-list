const masterList = [];

const itemActions = {
  addToList() {
    masterList.push(this);
    return masterList;
  },
  removeFromList() {
    const itemToRemove = masterList.findIndex(
      (item) => item === this,
    );
    masterList.splice(itemToRemove, 1);
    return masterList;
  },
};

const createItem = (title, description, project, priority, dueDate) => {
  const item = Object.create(itemActions);
  item.title = title;
  item.description = description;
  item.project = project;
  item.dueDate = dueDate;
  item.priority = priority;
  item.addToList();
  return item;
};

createItem('Make bed', 'Tidy sheets, fluff pillows.', 'Household', 2, '9/1/23');
createItem('Wash dishes', 'Use soap, dry dishes, put them away', 'Household', 3, '8/1/23');

export { createItem, masterList };
