import { masterProjectList } from './create_project';
import { masterList } from './create_list_item';

// Add warning about removing projects

const removeProject = function (e) {
  const project = e.target.getAttribute('index');
  for (let i = masterList.length - 1; i >= 0; i--) {
    if (masterList[i].project === masterProjectList[project].project) {
      masterList.splice(i, 1);
    }
  }
  masterProjectList.splice(e.target.getAttribute('index'), 1);
  return masterProjectList;
};

export default removeProject;
