import { masterList } from './create_list_item';

const titleSortAZ = function (filter) {
  masterList.sort((a, b) => (a[filter].toLowerCase() > b[filter].toLowerCase() ? 1 : -1));
  return masterList;
};

const titleSortZA = function (filter) {
  masterList.sort((a, b) => (a[filter].toLowerCase() > b[filter].toLowerCase() ? -1 : 1));
  return masterList;
};

const numSort19 = function (filter) {
  masterList.sort((a, b) => (a[filter] - b[filter]));
  return masterList;
};

const numSort91 = function (filter) {
  masterList.sort((a, b) => (b[filter] - a[filter]));
  return masterList;
};

const dateSort19 = function (filter) {
  const { isValid } = require('date-fns');
  masterList.sort((a, b) => {
    const dateA = a[filter];
    const dateB = b[filter];

    const isValidDateA = isValid(new Date(dateA));
    const isValidDateB = isValid(new Date(dateB));

    if (!isValidDateA && !isValidDateB) {
      return 0; // Both dates are invalid, consider them equal
    }

    if (!isValidDateA) {
      return 1; // dateA is invalid, move it to a higher index
    }

    if (!isValidDateB) {
      return -1; // dateB is invalid, move it to a higher index
    }

    // Both dates are valid, compare them as dates
    return new Date(dateA) - new Date(dateB);
  });
  return masterList;
};

const dateSort91 = function (filter) {
  const { isValid } = require('date-fns');
  masterList.sort((a, b) => {
    const dateA = a[filter];
    const dateB = b[filter];

    const isValidDateA = isValid(new Date(dateA));
    const isValidDateB = isValid(new Date(dateB));

    if (!isValidDateA && !isValidDateB) {
      return 0; // Both dates are invalid, consider them equal
    }

    if (!isValidDateA) {
      return 1; // dateA is invalid, move it to a higher index
    }

    if (!isValidDateB) {
      return -1; // dateB is invalid, move it to a higher index
    }

    // Both dates are valid, compare them as dates
    return new Date(dateB) - new Date(dateA);
  });

  return masterList;
};

export {
  titleSortAZ, titleSortZA, numSort19, numSort91, dateSort19, dateSort91,
};
