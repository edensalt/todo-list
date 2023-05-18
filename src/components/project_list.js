import { masterProjectList } from '../modules/create_project';
import { addProject } from './project_list_components';

const RenderProjectList = function () {
  const parent = document.querySelector('#projects-container');
  parent.innerHTML = '';
  // Check if list exists. If yes, remove items and re-render. If no, render.
  const container = document.createElement('div');
  container.setAttribute('id', 'projects-list');
  masterProjectList.forEach((project) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'project-item');
    card.classList.add('grid', 'grid-cols-2', 'gap-list', 'items-center', 'my-[5px]');
    addProject(project, card);
    container.appendChild(card);
  });
  parent.appendChild(container);
  console.table(masterProjectList);

  return container;
};

export default RenderProjectList;
