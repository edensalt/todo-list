import { masterList } from './create_list_item';

const completeItem = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterList[item].status = 'complete';
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

const incompleteItem = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterList[item].status = 'incomplete';
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

export { completeItem, incompleteItem };
