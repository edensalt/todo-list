// import { masterList } from '../modules/list-item';

function addDoneBtn(card) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Complete';
  btn.setAttribute('id', 'task-complete');
  card.appendChild(btn);
}

function addTitle(item, card) {
  const para = document.createElement('p');
  para.innerHTML = item.title;
  card.appendChild(para);
}

export { addDoneBtn, addTitle };
