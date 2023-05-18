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
  projectCat.addToList();
  return projectCat;
};

createProject('Household');
createProject('Odin Project');

export { createProject, masterProjectList };
