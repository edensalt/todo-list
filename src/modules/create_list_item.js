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
  item.dueDate = new Date(dueDate.toLocaleString([], { timeZone: 'UTC' }));
  item.status = status;
  item.addToList();
  return item;
};

// For starting data

const date1 = new Date('2023-07-16');
const date2 = new Date('2023-05-01');
const date3 = new Date('2023-08-24');
const date4 = new Date('2023-05-31');
const date5 = new Date('2023-05-25');

createItem('Bake cake', 'Bake a chocolate cake for the party.', 'Household', 3, date5, 'incomplete');
createItem('Get gift', 'Buy a notebook for birthday gift.', 'Errands', 2, date1, 'incomplete');
createItem('Return clothes', 'Return snow pants to recreation store.', 'Errands', 1, date2, 'incomplete');
createItem('To-Do list', 'Complete The Odin Project to-do list.', 'Odin Project', 3, date4, 'complete');
createItem('Buy concert tickets', 'Buy tickets for Jeff Rosenstock tour.', 'Activities', 2, date3, 'incomplete');

export { createItem, masterList };
