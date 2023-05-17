import RenderToDoList from '../components/list';
import { masterList } from './create_list_item';

function resetList() {
  const listContainer = document.querySelector('#list-container');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
}

const removeItem = function (e) {
  console.log(e.target.getAttribute('index'));
  masterList.splice(e.target.getAttribute('index'), 1);
  console.table(masterList);
  resetList();
  RenderToDoList();
  return masterList;
};

export default removeItem;
