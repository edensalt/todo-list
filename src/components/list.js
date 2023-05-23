import { masterList } from '../modules/create_list_item';
import { masterProjectList } from '../modules/create_project';
import {
  addDeleteBtn,
  addTitle,
  addDescription,
  addDueDate,
  addPriority,
  addProject,
  addCompleteBtn,
} from './list_components';

const { isPast } = require('date-fns');

// Define master lists based on filters, e.g.
// masterListComplete = function of completed items, etc (import from filters)

function determineProjectFilter() {
  const filteredProjects = masterProjectList.filter(
    (project) => project.status === 'filter',
  );
  const filteredProjectNames = filteredProjects.map(
    (project) => project.project,
  );
  return filteredProjectNames;
}
'';
function determineFilter() {
  const main = document.querySelector('#main');
  const filterStatus = main.getAttribute('filter');
  if (
    filterStatus === undefined
    || filterStatus === null
    || filterStatus === 'all'
  ) {
    const projectFilteredItemUnfilteredML = masterList.filter((item) => determineProjectFilter().includes(item.project));

    return projectFilteredItemUnfilteredML;
  }
  const filteredMasterListItems = masterList.filter(
    (item) => item.status === filterStatus,
  );
  const projectFilteredItemFilteredML = filteredMasterListItems.filter((item) => determineProjectFilter().includes(item.project));
  return projectFilteredItemFilteredML;
}

const RenderToDoList = function () {
  const list = determineFilter();
  const parent = document.querySelector('#items-container');
  parent.innerHTML = '';
  const container = document.createElement('div');
  container.setAttribute('id', 'items-list');
  container.classList.add('py-2', 'bg-sky-100');
  list.forEach((item) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'list-item');
    const index = list.indexOf(item);
    card.setAttribute('index', index);
    card.classList.add(
      'grid',
      'grid-cols-list',
      'gap-2',
      'items-center',
      'my-2',
      'text-sm',
      'bg-slate-50',
      'px-8',
    );
    addCompleteBtn(item, card);
    addTitle(item, card);
    addDescription(item, card);
    addProject(item, card);
    addPriority(item, card);
    addDueDate(item, card);
    addDeleteBtn(item, card);

    if (isPast(item.dueDate)) {
      card.classList.add('text-red-600', 'fill-red-600', 'bg-red-100');
    }
    if (item.status === 'complete') {
      card.classList.add('text-gray-400', 'fill-gray-400', 'bg-gray-200');
    }
    container.appendChild(card);
  });
  parent.appendChild(container);

  return container;
};

export default RenderToDoList;
