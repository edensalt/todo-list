const masterList = [];

const itemActions = {
  addToList() {
    masterList.push(this);
    return masterList;
  },
};

const createItem = (title, description, project, priority, dueDate, status) => {
  const item = Object.create(itemActions);
  item.title = title;
  item.description = description;
  item.project = project;
  item.priority = priority;
  item.dueDate = dueDate;
  item.status = status;
  item.addToList();
  return item;
};

createItem('Make bed', 'Tidy sheets, fluff pillows.', 'Household', 2, '9/1/23', 'incomplete');
createItem('Wash dishes', 'Use soap, dry dishes, put them away', 'Household', 3, '8/1/23', 'incomplete');
createItem('Do homework', 'Geometry assignment, history essay, and music practice', 'School', 2, '7/25/23', 'incomplete');
createItem('To-Do list', 'Complete The Odin Project to-do list', 'Odin Project', 3, '8/1/23', 'incomplete');
createItem('Make dinner', 'Make pizza and salad for dinner with friends', 'Household', 3, '6/10/23', 'incomplete');

export { createItem, masterList };
