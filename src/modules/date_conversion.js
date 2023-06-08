import { format } from 'date-fns';

const DateConversion = function (date) {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2].substring(0, 2);
  const newDate = format(new Date(year, (month - 1), day), 'MM/dd/yy');
  return newDate;
};

export default DateConversion;
