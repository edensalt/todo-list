import AddProjectForm from '../components/project_form';
import RenderProjectHeader from '../components/project_header';
import RenderProjectList from '../components/project_list';

const LeftSideBar = function () {
  const parent = document.querySelector('#left-sidebar');

  const projects = document.createElement('div');
  projects.setAttribute('id', 'projects');

  const projectHeader = document.createElement('h2');
  projectHeader.setAttribute('id', 'project-header');
  projectHeader.classList.add('text-2xl', 'flex', 'justify-center', 'py-2', 'font-handwriting');
  projectHeader.innerHTML = 'Projects';

  const projectList = document.createElement('div');
  projectList.setAttribute('id', 'projects-container');

  parent.appendChild(projects);
  projects.appendChild(projectHeader);
  projects.appendChild(AddProjectForm());
  projects.appendChild(RenderProjectHeader());
  projects.appendChild(projectList);
  projectList.appendChild(RenderProjectList());

  return projects;
};

export default LeftSideBar;
