import { masterList } from './create_list_item';

const completeItem = function (e) {
  const item = e.target.parentNode.getAttribute('index');
  masterList[item].status = 'complete';
  console.table(masterList);
  return masterList;
};

export default completeItem;
