import './style.css';
import HomePage from './pages/homepage';
import NavBar from './page_sections/navbar';

function setContentParent() {
  const div = document.createElement('div');
  div.setAttribute('id', 'parent');
  div.classList.add('bg-lime-500', 'border-orange-800');
  return div;
}

document.body.appendChild(setContentParent());
NavBar();
HomePage();
