import { masterProjectList } from '../modules/create_project';
import { addProjectFilter, removeProjectFilter } from '../modules/project_filter_method';
import removeProject from '../modules/remove_project';
import HomePage from '../pages/homepage';

function addDeleteBtn(project, card) {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'delete-project');
  btn.classList.add('bg-transparent');
  const index = masterProjectList.indexOf(project);
  btn.setAttribute('index', index);
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index=${index} class="hover:fill-red-600" height="18" viewBox="0 96 960 960" width="18"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`;
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
  para.classList.add('item', 'flex-1');
  card.appendChild(para);
}

function addFilterBtn(project, card) {
  const btn = document.createElement('button');
  btn.classList.add('bg-transparent', 'flex-0');
  const index = masterProjectList.indexOf(project);
  btn.setAttribute('index', index);
  if (project.status === 'filter') {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h600q14 0 25.5 6t18.5 14l-44 44v-4H180v600h600V533l60-60v403q0 24.75-17.625 42.375T780 936H180Zm281-168L239 546l42-42 180 180 382-382 42 42-424 424Z"/></svg>`;
  } else { btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index="${index}" height="18" viewBox="0 96 960 960" width="18"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Z"/></svg>`; }
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (project.status === 'filter') {
      removeProjectFilter(e);
    } else addProjectFilter(e);
    const main = document.querySelector('#main');
    main.innerHTML = '';
    HomePage();
  });
  card.appendChild(btn);
}

export { addProject, addDeleteBtn, addFilterBtn };
