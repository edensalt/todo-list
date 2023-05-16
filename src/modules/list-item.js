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

const createItem = (title, description, dueDate, priority) => {
  const item = Object.create(itemActions);
  item.title = title;
  item.description = description;
  item.dueDate = dueDate;
  item.priority = priority;
  item.addToList();
  return item;
};

export { createItem, masterList };
