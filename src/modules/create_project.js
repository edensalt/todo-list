const masterProjectList = [];

const projectActions = {
  addToList() {
    masterProjectList.push(this);
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

createProject('Activities');
createProject('Errands');
createProject('Household');
createProject('Odin Project');
createProject('Work');

export { createProject, masterProjectList };
