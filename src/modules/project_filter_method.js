import { masterProjectList } from './create_project';

const addProjectFilter = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterProjectList[item].status = 'filter';
  localStorage.setItem('masterprojectlist', JSON.stringify(masterProjectList));
  return masterProjectList;
};

const removeProjectFilter = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterProjectList[item].status = 'unfilter';
  localStorage.setItem('masterprojectlist', JSON.stringify(masterProjectList));
  return masterProjectList;
};

export { addProjectFilter, removeProjectFilter };
