import { masterList } from './create_list_item';

const titleSortAZ = function (filter) {
  masterList.sort((a, b) => (a[filter].toLowerCase() > b[filter].toLowerCase() ? 1 : -1));
  console.table(masterList);
  return masterList;
};

const titleSortZA = function (filter) {
  masterList.sort((a, b) => (a[filter].toLowerCase() > b[filter].toLowerCase() ? -1 : 1));
  console.table(masterList);

  return masterList;
};

const numSort19 = function (filter) {
  masterList.sort((a, b) => (a[filter] - b[filter]));
  console.table(masterList);
  return masterList;
};

const numSort91 = function (filter) {
  masterList.sort((a, b) => (b[filter] - a[filter]));
  console.table(masterList);
  return masterList;
};

export {
  titleSortAZ, titleSortZA, numSort19, numSort91,
};
