import './style.css';
import HomePage from './pages/homepage';
import NavBar from './page_sections/navbar';
import Footer from './page_sections/footer';

function setContentParent() {
  const div = document.createElement('div');
  div.setAttribute('id', 'parent');
  div.classList.add('min-h-screen', 'bg-gray-100');
  return div;
}

document.body.appendChild(setContentParent());
NavBar();
HomePage();
Footer();
