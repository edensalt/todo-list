import gitHubLogo from '../images/github-mark-white.png';

const Footer = function () {
  const parent = document.querySelector('#parent');

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  footer.classList.add('lg:fixed', 'relative', 'bg-gray-600', 'text-white', 'flex', 'w-full', 'justify-center', 'items-center', 'bottom-0', 'py-2', 'text-xs');

  const githubLogoLink = document.createElement('a');
  githubLogoLink.href = 'https://github.com/edensalt/todo-list';
  githubLogoLink.target = '_blank'; // Open the link in a new tab
  footer.appendChild(githubLogoLink);

  const github = new Image();
  github.src = gitHubLogo;
  github.setAttribute('id', 'github-logo');
  github.setAttribute('alt', 'github logo');
  github.classList.add('h-6', 'mr-4');
  githubLogoLink.appendChild(github);

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/edensalt/todo-list';
  githubLink.target = '_blank'; // Open the link in a new tab
  githubLink.classList.add('hover:text-yellow-100', 'mr-2');
  footer.appendChild(githubLink);

  const username = document.createElement('p');
  username.setAttribute('id', 'username');
  username.innerHTML = '@edensalt';
  username.target = '_blank';
  githubLink.appendChild(username);

  const clearBtn = document.createElement('button');
  clearBtn.setAttribute('id', 'clear-storage');
  clearBtn.innerHTML = 'Clear local storage';
  clearBtn.classList.add('px-2', 'py-1', 'hover:text-yellow-100', 'hover:outline', 'hover:outline-1');
  footer.appendChild(clearBtn);

  clearBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
  });

  parent.appendChild(footer);
};

export default Footer;
