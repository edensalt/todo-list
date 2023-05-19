import { masterProjectList } from './create_project';
import { masterList } from './create_list_item';
import HomePage from '../pages/homepage';

// Add warning about removing projects

function removeProjectWarning(project) {
  const parent = document.querySelector('#parent');
  const popup = document.createElement('div');
  popup.setAttribute('id', 'warning-popup');
  popup.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-red-200', 'p-4');

  const para = document.createElement('p');
  para.innerHTML = 'Confirm project deletion. If you delete this project, all tasks associated with the project will be deleted. Okay to proceed?';

  const cancelBtn = document.createElement('button');
  cancelBtn.innerHTML = 'Cancel';
  cancelBtn.classList.add('btn-complete');

  const confirmBtn = document.createElement('button');
  confirmBtn.innerHTML = 'Delete project';
  confirmBtn.classList.add('btn-complete');

  parent.appendChild(popup);
  popup.appendChild(para);
  popup.appendChild(cancelBtn);
  popup.appendChild(confirmBtn);

  cancelBtn.addEventListener('click', () => popup.remove());

  confirmBtn.addEventListener('click', () => {
    for (let i = masterList.length - 1; i >= 0; i--) {
      if (masterList[i].project === masterProjectList[project].project) {
        masterList.splice(i, 1);
      }
    }
    masterProjectList.splice(project, 1);
    popup.remove();
    const main = document.querySelector('#main');
    main.innerHTML = '';
    HomePage();
  });
}

// const confirmRemoveProject

const removeProject = function (e) {
  const project = e.target.getAttribute('index');
  console.log(project);
  removeProjectWarning(project);
};

export default removeProject;
