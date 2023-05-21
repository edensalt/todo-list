import { addCompleteFilter, addAlphaFilter, addNumFilter } from './list_fiters_components';
import { titleSortAZ } from '../modules/list_filter_methods';

const RenderListFilters = function () {
  const parent = document.querySelector('#items');

  const container = document.createElement('div');
  container.setAttribute('id', 'list-filters');
  container.classList.add('py-2', 'bg-rose-200', 'grid', 'grid-cols-list', 'gap-2', 'items-center', 'text-sm', 'px-8');
  container.appendChild(addCompleteFilter('status'));
  container.appendChild(addAlphaFilter('Title', 'title'));
  container.appendChild(addAlphaFilter('Description', 'description'));
  container.appendChild(addAlphaFilter('Project', 'project'));
  container.appendChild(addNumFilter('priority'));
  container.appendChild(addAlphaFilter('Date', 'date'));

  parent.appendChild(container);

  return container;
};

export default RenderListFilters;
