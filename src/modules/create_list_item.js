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
  item.dueDate = new Date(dueDate);
  item.status = status;
  item.addToList();
  return item;
};

// For starting data

const date1 = new Date('2023-07-16');
const date2 = new Date('2023-07-01');
const date3 = new Date('2023-08-24');
const date4 = new Date('2023-07-31');
const date5 = new Date('2023-09-09');

createItem('Make bed', 'Tidy sheets, fluff pillows.', 'Household', 2, date1, 'incomplete');
createItem('Wash dishes', 'Use soap, dry dishes, put them away', 'Household', 3, date2, 'complete');
createItem('Do homework', 'Geometry assignment, history essay, and music practice', 'School', 2, date3, 'incomplete');
createItem('To-Do list', 'Complete The Odin Project to-do list', 'Odin Project', 3, date4, 'incomplete');
createItem('Make dinner', 'Make pizza and salad for dinner with friends', 'Household', 3, date5, 'incomplete');

export { createItem, masterList };
