import { masterList } from './create_list_item';

const titleSortAZ = function (filter) {
  masterList.sort((a, b) => (a[filter].toLowerCase() > b[filter].toLowerCase() ? 1 : -1));
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

const titleSortZA = function (filter) {
  masterList.sort((a, b) => (a[filter].toLowerCase() > b[filter].toLowerCase() ? -1 : 1));
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

const numSort19 = function (filter) {
  masterList.sort((a, b) => (a[filter] - b[filter]));
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

const numSort91 = function (filter) {
  masterList.sort((a, b) => (b[filter] - a[filter]));
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

const dateSort19 = function (filter) {
  masterList.sort((a, b) => {
    const dateA = a[filter];
    const dateB = b[filter];

    return new Date(dateA) - new Date(dateB);
  });
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

const dateSort91 = function (filter) {
  masterList.sort((a, b) => {
    const dateA = a[filter];
    const dateB = b[filter];

    return new Date(dateB) - new Date(dateA);
  });
  localStorage.setItem('masterlist', JSON.stringify(masterList));
  return masterList;
};

export {
  titleSortAZ, titleSortZA, numSort19, numSort91, dateSort19, dateSort91,
};
