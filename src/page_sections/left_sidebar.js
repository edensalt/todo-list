const LeftSideBar = function () {
  const parent = document.querySelector('#left-sidebar');

  const projects = document.createElement('div');
  projects.setAttribute('id', 'projects');
  projects.classList.add('bg-yellow-100', 'border-2');

  const projectHeader = document.createElement('h2');
  projectHeader.setAttribute('id', 'project-header');
  projectHeader.classList.add('text-2xl', 'font-bold', 'flex', 'justify-center', 'py-10');
  projectHeader.innerHTML = 'Projects';

  const projectList = document.createElement('div');
  projectList.setAttribute('id', 'project-div');
  projectList.classList.add('grid', 'bg-yellow-300');

  parent.appendChild(projects);
  projects.appendChild(projectHeader);
  projects.appendChild(projectList);

  return projects;
};

export default LeftSideBar;
