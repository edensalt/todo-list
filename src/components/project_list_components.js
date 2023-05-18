// import removeItem from '../modules/remove_list_item';
// import { masterProjectList } from '../modules/create_project';
// // import RenderToDoList from './list';

// // function addDoneBtn(item, card) {
//   const btn = document.createElement('button');
//   btn.innerHTML = 'Complete';
//   btn.setAttribute('id', 'task-complete');
//   btn.classList.add('btn-complete');
//   const index = masterList.indexOf(item);
//   btn.setAttribute('index', index);
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     removeItem(e);
//     RenderToDoList();
//   });
//   card.appendChild(btn);
// // }

// function addTitle(item, card) {
//   const para = document.createElement('p');
//   para.innerHTML = item.title;
//   para.classList.add('item');
//   card.appendChild(para);
// }

// function addDescription(item, card) {
//   const para = document.createElement('p');
//   para.innerHTML = item.description;
//   para.classList.add('item');
//   card.appendChild(para);
// }

function addProject(project, card) {
  const para = document.createElement('p');
  para.innerHTML = project.project;
  para.classList.add('item');
  card.appendChild(para);
}

// function addPriority(item, card) {
//   const para = document.createElement('p');
//   para.innerHTML = item.priority;
//   para.classList.add('item');
//   para.classList.add('item');
//   card.appendChild(para);
// }

// function addDueDate(item, card) {
//   const para = document.createElement('p');
//   para.innerHTML = item.dueDate;
//   para.classList.add('item');
//   card.appendChild(para);
// }

export { addProject };
