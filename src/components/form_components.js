const createFormField = function (container, type, id, name, placeholder) {
  const field = document.createElement('input');
  field.type = type;
  field.id = id;
  field.name = name;
  field.placeholder = placeholder;

  container.appendChild(field);
};

const createDataList = function (container, list, name, id, type, value1, value2, value3) {
  const field = document.createElement('input');
  field.setAttribute('list', list);
  field.name = name;
  field.id = id;
  field.type = type;
  const datalist = document.createElement('datalist');
  datalist.id = list;
  const option1 = document.createElement('option');
  option1.value = value1;
  const option2 = document.createElement('option');
  option2.value = value2;
  const option3 = document.createElement('option');
  option3.value = value3;

  container.appendChild(field);
  container.appendChild(datalist);
  datalist.appendChild(option1);
  datalist.appendChild(option2);
  datalist.appendChild(option3);
};

const createSubmitBtn = function (container, type, id, innerHTML) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.id = id;
  btn.innerHTML = innerHTML;
  container.appendChild(btn);
};

export { createFormField, createDataList, createSubmitBtn };
