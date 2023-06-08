let masterList = [];

function populateStorage() {
  localStorage.setItem('masterlist', JSON.stringify(masterList));
}

function setList() {
  const storageList = localStorage.getItem('masterlist');
  const jsonList = JSON.parse(storageList);
  return jsonList;
}

if (!localStorage.getItem('masterlist')) {
  populateStorage();
} else {
  masterList = setList();
}

const itemActions = {
  addToList() {
    masterList.push(this);
    populateStorage();
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

export { createItem, masterList };
