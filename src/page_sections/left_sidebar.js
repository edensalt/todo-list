import AddProjectForm from '../components/project_form';
import RenderProjectList from '../components/project_list';

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
  projectList.setAttribute('id', 'projects-container');
  projectList.classList.add('grid', 'bg-yellow-300');

  parent.appendChild(projects);
  projects.appendChild(projectHeader);
  projects.appendChild(AddProjectForm());
  projects.appendChild(projectList);
  projectList.appendChild(RenderProjectList());

  return projects;
};

export default LeftSideBar;
