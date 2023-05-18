import { masterProjectList } from '../modules/create_project';
import removeProject from '../modules/remove_project';
import HomePage from '../pages/homepage';

function addDeleteBtn(project, card) {
  const btn = document.createElement('button');
  btn.innerHTML = 'Delete';
  btn.setAttribute('id', 'delete-project');
  btn.classList.add('btn-complete');
  const index = masterProjectList.indexOf(project);
  btn.setAttribute('index', index);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    removeProject(e);
    const main = document.querySelector('#main');
    main.innerHTML = '';
    HomePage();
  });
  card.appendChild(btn);
}

function addProject(project, card) {
  const para = document.createElement('p');
  para.innerHTML = project.project;
  para.classList.add('item');
  card.appendChild(para);
}

export { addProject, addDeleteBtn };
