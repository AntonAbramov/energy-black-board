import moment from 'moment';
import faker from 'faker';

const DAY_TIME_TEMPLATE = 'DD.MM.YYYY HH:mm';
const INTERVAL_IN_MINUTES = 15;

const getDay = date => {
  const arr = [...Array((60 * 24) / 15).keys()].map((_, idx) => {
    const dateTime = moment(date, DAY_TIME_TEMPLATE)
      .startOf('day')
      .add(INTERVAL_IN_MINUTES * idx, 'minutes')
      .format(DAY_TIME_TEMPLATE);
    return {
      dateTime,
      generated: faker.finance.amount(1, 100, 3),
      consumed: faker.finance.amount(1, 400, 8),
    };
  });
  return arr;
};

const getHours = date => {
  const startOfDay = moment(date, DAY_TIME_TEMPLATE)
    .startOf('day')
    .format(DAY_TIME_TEMPLATE);

  if (date === startOfDay) {
    return date;
  }

  const diffInMinutesSinceStartDay = moment(date, DAY_TIME_TEMPLATE).diff(moment(date, DAY_TIME_TEMPLATE).startOf('day'), 'minutes');

  const intOfPeriods = Math.floor(diffInMinutesSinceStartDay / 15);

  const arr = [...Array(intOfPeriods).keys()].map((_, idx) => {
    const dateTime = moment(date, DAY_TIME_TEMPLATE)
      .startOf('day')
      .add(INTERVAL_IN_MINUTES * (idx + 1), 'minutes')
      .format(DAY_TIME_TEMPLATE);

    return {
      dateTime,
      generated: faker.finance.amount(1, 100, 3),
      consumed: faker.finance.amount(1, 400, 8),
    };
  });

  return arr;
};

const getMonth = date => {
  const daysInPreviousMonth = moment()
    .subtract(1, 'months')
    .daysInMonth();

  return [...Array(daysInPreviousMonth).keys()].map((_, idx) => ({
    dateTime: idx + 1,
    generated: faker.finance.amount(1, 300, 3),
    consumed: faker.finance.amount(1, 1000, 8),
  }));
};

const getYear = date => {
  return [
    {
      dateTime: date,
      generated: faker.finance.amount(1, 300, 3),
      consumed: faker.finance.amount(1, 1000, 8),
    },
  ];
};

export { getDay, getHours, getMonth, getYear, DAY_TIME_TEMPLATE };

// class MockDataFactory {
//   constructor() {
//     this.dayTimeTemplate = 'DD.MM.YYYY HH:mm';
//     this.intervalInMinutes = 15;
//   }

//   getDay(date) {
//     const arr = [...Array((60 * 24) / 15).keys()].map((_, idx) => {
//       const dateTime = moment(date, this.dayTimeTemplate)
//         .startOf('day')
//         .add(this.intervalInMinutes * idx, 'minutes')
//         .format(this.dayTimeTemplate);
//       return {
//         dateTime,
//         generated: faker.finance.amount(1, 100, 3),
//         consumed: faker.finance.amount(1, 400, 8),
//       };
//     });
//     return arr;
//   }

//   getMonth(date) {
//     return {
//       dateTime: date,
//       generated: faker.finance.amount(1, 300, 3),
//       consumed: faker.finance.amount(1, 1000, 8),
//     };
//   }

//   getYear(date) {
//     return {
//       dateTime: date,
//       generated: faker.finance.amount(1, 300, 3),
//       consumed: faker.finance.amount(1, 1000, 8),
//     };
//   }

//   getHours(date) {
//     const startOfDay = moment(date, this.dayTimeTemplate).startOf('day');

//     if (date === startOfDay.format(this.dayTimeTemplate)) {
//       return date;
//     }

//     const diffInMinutesSinceStartDay = moment(date, this.dayTimeTemplate).diff(startOfDay, 'minutes');

//     const intOfPeriods = Math.floor(diffInMinutesSinceStartDay / 15);

//     const arr = [...Array(intOfPeriods).keys()].map((_, idx) => {
//       const dateTime = startOfDay.add(this.intervalInMinutes * idx, 'minutes').format(this.dayTimeTemplate);
//       return {
//         dateTime,
//         generated: faker.finance.amount(1, 100, 3),
//         consumed: faker.finance.amount(1, 400, 8),
//       };
//     });

//     return arr;
//   }
// }

// const mockDataFactory = new MockDataFactory();

// console.log(mockDataFactory.getDay("01.05.2019 04:15"));
// console.log(mockDataFactory.getMonth("01.05.2019 04:15"));
// console.log(mockDataFactory.getYear("01.05.2019 04:15"));
// console.log(mockDataFactory.getHours('01.05.2019 04:39'));
