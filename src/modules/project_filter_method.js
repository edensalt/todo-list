import { masterProjectList } from './create_project';

const addProjectFilter = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterProjectList[item].status = 'filter';
  return masterProjectList;
};

const removeProjectFilter = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterProjectList[item].status = 'unfilter';
  return masterProjectList;
};

export { addProjectFilter, removeProjectFilter };
