import { isPast } from 'date-fns';
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

function determineProjectFilter() {
  const filteredProjects = masterProjectList.filter(
    (project) => project.status === 'filter',
  );
  const filteredProjectNames = filteredProjects.map(
    (project) => project.project,
  );
  return filteredProjectNames;
}

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
  container.classList.add('py-2');
  container.setAttribute('id', 'items-list');
  list.forEach((item) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'list-item');
    const index = list.indexOf(item);
    card.setAttribute('index', index);
    card.classList.add(
      'grid',
      'lg:grid-cols-list',
      'grid-cols-listSmall',
      'gap-2',
      'py-1',
      'items-center',
      'text-xs',
      'px-8',
    );
    addCompleteBtn(item, card);
    addTitle(item, card);
    addDescription(item, card);
    addProject(item, card);
    addPriority(item, card);
    addDueDate(item, card);
    addDeleteBtn(item, card);

    const pastBoolean = isPast(new Date(item.dueDate));

    if (item.status === 'complete') {
      card.classList.add('text-gray-400', 'fill-gray-400');
    } else if (pastBoolean) {
      card.classList.add('text-red-600', 'fill-red-600');
    }

    container.appendChild(card);
  });
  parent.appendChild(container);

  return container;
};

export default RenderToDoList;
