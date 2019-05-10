import moment from 'moment';
import faker from 'faker';

const startDate = '01.05.2019 00:00';
const endDate = '02.05.2019 00:00';
const timeTemplate = 'DD.MM.YYYY HH:mm';
const step = 15;

const getDates = (s, e, i, arr = []) => {
  // arr.push({
  //   dateTime: s,
  //   generated: faker.finance.amount(1, 1000, 8),
  //   consumed: faker.finance.amount(1, 1000, 8),
  // });
  if (s === e) return arr;
  const next = moment(s, timeTemplate)
    .add(i, 'minutes')
    .format(timeTemplate);
  arr.push({
    dateTime: next,
    generated: faker.finance.amount(1, 1000, 8),
    consumed: faker.finance.amount(1, 1000, 8),
  });
  return getDates(next, e, i, arr);
};

const pre = window.document.createElement('pre');

window.document.querySelector('body').appendChild(pre).textContent = JSON.stringify(getDates(startDate, endDate, step), null, 2);
