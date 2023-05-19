import { masterProjectList } from '../modules/create_project';
import { addProject, addDeleteBtn, addFilterBtn } from './project_list_components';

const RenderProjectList = function () {
  const parent = document.querySelector('#projects-container');
  parent.innerHTML = '';
  const container = document.createElement('div');
  container.setAttribute('id', 'projects-list');
  container.classList.add('py-2', 'px-8', 'bg-emerald-50');
  masterProjectList.forEach((project) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'project-item');
    card.classList.add('flex', 'gap-2', 'items-center', 'my-2', 'text-sm');
    addFilterBtn(project, card);
    addProject(project, card);
    addDeleteBtn(project, card);
    container.appendChild(card);
  });
  parent.appendChild(container);

  return container;
};

export default RenderProjectList;
