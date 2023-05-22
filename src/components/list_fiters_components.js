import {
  dateSort19,
  dateSort91,
  numSort19, numSort91, titleSortAZ, titleSortZA,
} from '../modules/list_filter_methods';
import RenderToDoList from './list';

function addAlphaFilter(name, filter) {
  const div = document.createElement('div');
  div.classList.add('item');
  const btn = document.createElement('button');
  btn.setAttribute('id', `${filter}-filter`);
  btn.classList.add('flex', 'align-center', 'gap-2', 'fill-black');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18"><path d="M305 601V309L202 412l-66-66 217-217 217 217-66 66-105-104v293h-94Zm302 420L390 803l66-65 103 102V548h94v293l105-103 66 66-217 217Z"/></svg>${name}`;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const filterStatus = btn.getAttribute('filter');
    if (filterStatus === 'A-Z') {
      titleSortZA(filter);
      btn.setAttribute('filter', 'Z-A');
    } else {
      titleSortAZ(filter);
      btn.setAttribute('filter', 'A-Z');
    }
    RenderToDoList();
  });
  div.appendChild(btn);
  return div;
}

function addNumFilter(filter, name) {
  const div = document.createElement('div');
  div.classList.add('item');
  const btn = document.createElement('button');
  btn.setAttribute('id', `${filter}-filter`);
  btn.classList.add('flex', 'align-center', 'gap-2', 'fill-black');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18"><path d="M305 601V309L202 412l-66-66 217-217 217 217-66 66-105-104v293h-94Zm302 420L390 803l66-65 103 102V548h94v293l105-103 66 66-217 217Z"/></svg>${name}`;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const filterStatus = btn.getAttribute('filter');
    if (filterStatus === '1-9') {
      numSort91(filter);
      btn.setAttribute('filter', '9-1');
    } else {
      numSort19(filter);
      btn.setAttribute('filter', '1-9');
    }
    RenderToDoList();
  });
  div.appendChild(btn);
  return div;
}

function addDateFilter(filter, name) {
  const div = document.createElement('div');
  div.classList.add('item');
  const btn = document.createElement('button');
  btn.setAttribute('id', `${filter}-filter`);
  btn.classList.add('flex', 'align-center', 'gap-2', 'fill-black');
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18"><path d="M305 601V309L202 412l-66-66 217-217 217 217-66 66-105-104v293h-94Zm302 420L390 803l66-65 103 102V548h94v293l105-103 66 66-217 217Z"/></svg>${name}`;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const filterStatus = btn.getAttribute('filter');
    if (filterStatus === '1-9') {
      dateSort91(filter);
      btn.setAttribute('filter', '9-1');
    } else {
      dateSort19(filter);
      btn.setAttribute('filter', '1-9');
    }
    RenderToDoList();
  });
  div.appendChild(btn);
  return div;
}

function addCompleteFilter(filter) {
  const div = document.createElement('div');
  const btn = document.createElement('button');
  btn.setAttribute('id', `${filter}-filter`);
  btn.classList.add('flex', 'align-center', 'gap-2', 'fill-black');
  btn.setAttribute('status', 'unfiltered');
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18"><path d="M440 921q-27 0-46-19t-19-46V625L142 326q-24-30-7.5-63t53.5-33h584q37 0 53.5 33t-6.5 63L586 625v239q0 25-16.5 41T528 921h-88Zm40-316 221-280H260l220 280Zm0 0Z"/></svg>';

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const main = document.querySelector('#main');
    const filterStatus = main.getAttribute('filter');
    if (filterStatus === undefined || filterStatus === null || filterStatus === 'all') {
      main.setAttribute('filter', 'incomplete');
      RenderToDoList();
    } else if (filterStatus === 'incomplete') {
      main.setAttribute('filter', 'complete');
      RenderToDoList();
    } else {
      main.setAttribute('filter', 'all');
      RenderToDoList();
    }
  });
  div.appendChild(btn);
  return div;
}

export {
  addAlphaFilter, addNumFilter, addDateFilter, addCompleteFilter,
};
