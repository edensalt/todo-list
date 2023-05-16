import './style.css';
import toAddItem from './navigation';
// Add items for testing, styling
import { masterList } from './modules/list-item';
import RenderToDoList from './components/list';

console.table(masterList);

function setContentParent() {
  const div = document.createElement('div');
  div.setAttribute('id', 'parent');
  return div;
}

function addItemBtn() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Add an item';
  btn.setAttribute('id', 'add-item-btn');
  return btn;
}

document.body.appendChild(setContentParent());
const parent = document.querySelector('#parent');
parent.appendChild(addItemBtn());

toAddItem();
RenderToDoList();
