import './style.css';
import HomePage from './pages/homepage';
import NavBar from './page_sections/navbar';

function setContentParent() {
  const div = document.createElement('div');
  div.setAttribute('id', 'parent');
  div.classList.add('w-screen');
  return div;
}

document.body.appendChild(setContentParent());
NavBar();
HomePage();
