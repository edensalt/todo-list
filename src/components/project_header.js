const RenderProjectHeader = function () {
  const parent = document.querySelector('#projects');

  const container = document.createElement('div');
  container.classList.add('flex', 'py-2', 'bg-lime-300', 'gap-2', 'items-center', 'text-sm', 'px-8', 'h-12');
  const div = document.createElement('div');
  const symbol = document.createElement('div');
  symbol.classList.add('flex', 'align-center', 'gap-2', 'fill-black');
  symbol.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18"><path d="M440 921q-27 0-46-19t-19-46V625L142 326q-24-30-7.5-63t53.5-33h584q37 0 53.5 33t-6.5 63L586 625v239q0 25-16.5 41T528 921h-88Zm40-316 221-280H260l220 280Zm0 0Z"/></svg>Select proejcts to filter';

  container.appendChild(symbol);
  container.appendChild(div);
  container.appendChild(div);

  parent.appendChild(container);

  return container;
};

export default RenderProjectHeader;
