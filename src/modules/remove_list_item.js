import { masterList } from './create_list_item';

const removeItem = function (e) {
  masterList.splice(e.target.parentNode.getAttribute('index'), 1);
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

export default removeItem;
