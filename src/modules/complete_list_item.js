import { masterList } from './create_list_item';

const completeItem = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterList[item].status = 'complete';
  return masterList;
};

const incompleteItem = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterList[item].status = 'incomplete';
  return masterList;
};

export { completeItem, incompleteItem };
