const masterList = [];

const itemActions = {
  addToList() {
    masterList.push(this);
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
createItem('Do homework', 'Geometry assignment, history essay, and music practice', 'School', 2, '7/25/23');
createItem('To-Do list', 'Complete The Odin Project to-do list', 'Odin Project', 3, '8/1/23');
createItem('Make dinner', 'Make pizza and salad for dinner with friends', 'Household', 3, '6/10/23');

export { createItem, masterList };
