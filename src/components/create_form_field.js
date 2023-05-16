const createFormField = function (container, type, id, name, placeholder) {
  const field = document.createElement('input');
  field.type = type;
  field.id = id;
  field.name = name;
  field.placeholder = placeholder;

  container.appendChild(field);
};

export default createFormField;
