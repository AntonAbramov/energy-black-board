import moment from 'moment';
import faker from 'faker';

class MockDataFactory {
  constructor() {
    this.kwtHPrice = 0.28;
    this.dayTimeTemplate = 'DD.MM.YYYY HH:mm';
    this.monthTimeTemplate = 'DD.MM.YYYY HH:mm';
    this.yearTimeTemplate = 'DD.MM.YYYY HH:mm';
  }

  getfullDay(date) {
    return null;
  }

  getfullMonth(date) {
    return null;
  }

  getfullYear(date) {
    return null;
  }

  getHoursOfDay(date) {
    return null;
  }
}

const mockDataFactory = new MockDataFactory();

mockDataFactory.getfullDay();
mockDataFactory.getfullMonth();
mockDataFactory.getfullYear();
mockDataFactory.getHoursOfDay();
