let masterProjectList = [];

function populateProjectStorage() {
  localStorage.setItem('masterprojectlist', JSON.stringify(masterProjectList));
}

function setProjectList() {
  const storageList = localStorage.getItem('masterprojectlist');
  const jsonList = JSON.parse(storageList);
  return jsonList;
}

if (!localStorage.getItem('masterprojectlist')) {
  populateProjectStorage();
} else {
  masterProjectList = setProjectList();
}

const projectActions = {
  addToList() {
    masterProjectList.push(this);
    populateProjectStorage();
    return masterProjectList;
  },
};

const createProject = (project) => {
  const projectCat = Object.create(projectActions);
  projectCat.project = project;
  projectCat.status = 'filter';
  projectCat.addToList();
  return projectCat;
};

export { createProject, masterProjectList };
