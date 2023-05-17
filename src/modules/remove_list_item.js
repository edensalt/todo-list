import { masterList } from './create_list_item';

const removeItem = function (e) {
  console.log(e.target.getAttribute('index'));
  masterList.splice(e.target.getAttribute('index'), 1);
  console.table(masterList);
  return masterList;
};

export default removeItem;
