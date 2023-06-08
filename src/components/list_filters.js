import {
  addDateFilter, addCompleteFilter, addAlphaFilter, addNumFilter,
} from './list_fiters_components';

const RenderListFilters = function () {
  const parent = document.querySelector('#items');

  const container = document.createElement('div');
  container.setAttribute('id', 'list-filters');
  container.classList.add('py-1', 'grid', 'lg:grid-cols-list', 'grid-cols-listSmall', 'gap-2', 'items-center', 'text-sm', 'px-8', 'h-8');
  container.appendChild(addCompleteFilter('status'));
  container.appendChild(addAlphaFilter('Title', 'title'));
  container.appendChild(addAlphaFilter('Description', 'description'));
  container.appendChild(addAlphaFilter('Project', 'project'));
  container.appendChild(addNumFilter('priority', ''));
  container.appendChild(addDateFilter('dueDate', 'Date'));

  parent.appendChild(container);

  return container;
};

export default RenderListFilters;
