import { masterList } from './create_list_item';

const removeItem = function (e) {
  masterList.splice(e.target.parentNode.getAttribute('index'), 1);
  return masterList;
};

export default removeItem;
