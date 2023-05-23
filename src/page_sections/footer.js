import gitHubLogo from '../images/github-mark-white.png';

const Footer = function () {
  const parent = document.querySelector('#parent');

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  footer.classList.add('bg-gray-800', 'text-white', 'flex', 'w-full', 'justify-center', 'items-center', 'bottom-0', 'py-2');

  const githubLogoLink = document.createElement('a');
  githubLogoLink.href = 'https://github.com/edensalt/todo-list';
  githubLogoLink.target = '_blank'; // Open the link in a new tab
  footer.appendChild(githubLogoLink);

  const github = new Image();
  github.src = gitHubLogo;
  github.setAttribute('id', 'github-logo');
  github.setAttribute('alt', 'github logo');
  github.classList.add('h-8', 'mr-4');
  githubLogoLink.appendChild(github);

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/edensalt/todo-list';
  githubLink.target = '_blank'; // Open the link in a new tab
  githubLink.classList.add('hover:text-yellow-100');
  footer.appendChild(githubLink);

  const username = document.createElement('p');
  username.setAttribute('id', 'username');
  username.innerHTML = '@edensalt';
  username.target = '_blank';
  githubLink.appendChild(username);

  parent.appendChild(footer);
};

export default Footer;
