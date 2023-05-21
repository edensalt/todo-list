import addFilter from './list_fiters_components';

const RenderListFilters = function () {
  const parent = document.querySelector('#items');

  const container = document.createElement('div');
  container.innerHTML = 'hi';
  container.setAttribute('id', 'list-filters');
  container.classList.add('py-2', 'bg-rose-200', 'grid', 'grid-cols-list', 'gap-2', 'items-center', 'text-sm', 'px-8');
  container.appendChild(addFilter('Title', 'title'));
  container.appendChild(addFilter('Description', 'description'));
  container.appendChild(addFilter('Project', 'project'));

  parent.appendChild(container);

  return container;
};

export default RenderListFilters;
