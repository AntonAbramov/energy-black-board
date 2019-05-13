import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { getDay, getHours, getMonth, getYear, DAY_TIME_TEMPLATE } from '../mockDataFactory/index';

const getGenerated = arr => {
  return arr.reduce((acc, el) => {
    return (acc += parseInt(el.generated, 10));
  }, 0);
};
const getConsumed = arr => {
  return arr.reduce((acc, el) => {
    return (acc += parseInt(el.consumed, 10));
  }, 0);
};
const getEarned = data => {
  return parseInt(getGenerated(data) * 0.28, 10);
};
const getSpent = data => {
  return parseInt(getConsumed(data) * 0.28, 10);
};

class DashboardPage extends Component {
  state = {
    currentTime: moment(new Date()).format('HH:mm:ss'),
    intervalId: null,
    viewPeriod: null,
    todayData: [],
    previousMonthData: [],
    previousYearData: [],
  };

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({
      viewPeriod: 'today',
      todayData: getHours(moment(new Date()).format(DAY_TIME_TEMPLATE)).map(item => ({
        dateTime: item.dateTime.split(' ')[1],
        generated: item.generated,
        consumed: item.consumed,
      })),
      previousMonthData: getMonth(),
      previousYearData: getYear(),
      intervalId,
    });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  timer = () => {
    this.setState({
      currentTime: moment(new Date()).format('HH:mm:ss'),
    });
  };

  goToDetails = () => {
    this.props.history.push(`/energy/${moment(new Date()).format('DD.MM.YYYY')}`);
  };

  handleSelectPeriod = e => {
    let viewData;

    if (e === 'today') {
      viewData = getHours(moment(new Date()).format(DAY_TIME_TEMPLATE)).map(item => ({
        dateTime: item.dateTime.split(' ')[1],
        generated: item.generated,
        consumed: item.consumed,
      }));
    }
    if (e === 'month') {
      viewData = getMonth();
    }
    if (e === 'year') {
      viewData = getYear();
    }
    this.setState({
      viewPeriod: e,
      viewData,
    });
  };

  showChart = period => {
    if (period === 'year') {
      return this.state.previousYearData;
    }
    if (period === 'month') {
      return this.state.previousMonthData;
    }
    return this.state.todayData;
  };

  render() {
    const { classes } = this.props;
    const { currentTime } = this.state;
    return (
      <div className={classes.dashboard}>
        <h1 className={classes['page-title']}>energy dashboard</h1>
        <ul className={classes.dashboard__list}>
          <li
            className={`${classes.dashboard__item} ${this.state.viewPeriod === 'today' && classes['dashboard__item--active']}`}
            onClick={() => this.handleSelectPeriod('today')}
          >
            <div className={classes['dashboard-item__title']}>today</div>
            <div className={classes.dashboard__date}>
              <span className={classes['dashboard__main-date']}>{moment().format('DD.MM.YYYY')}</span>
              <span className={classes['dashboard__secondary-date']}>{currentTime}</span>
            </div>
            <div className={classes['dashboard__stat-wrap']}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>{getGenerated(this.state.todayData)}</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>{getConsumed(this.state.todayData)}</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
            <div className={`${classes['dashboard__stat-wrap']} ${classes['dashboard__stat-wrap--money']}`}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>earned</div>
                <span className={classes['dashboard__stat-value']}>{getEarned(this.state.todayData)}</span>
                <span className={classes['dashboard__stat-units']}>€</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>spend</div>
                <span className={classes['dashboard__stat-value']}>{getSpent(this.state.todayData)}</span>
                <span className={classes['dashboard__stat-units']}>€</span>
              </div>
            </div>
          </li>

          <li
            className={`${classes.dashboard__item} ${this.state.viewPeriod === 'month' && classes['dashboard__item--active']}`}
            onClick={() => this.handleSelectPeriod('month')}
          >
            <div className={classes['dashboard-item__title']}>previous month</div>
            <div className={classes.dashboard__date}>
              <span className={classes['dashboard__main-date']}>april 2019</span>
            </div>
            <div className={classes['dashboard__stat-wrap']}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>{getGenerated(this.state.previousMonthData)}</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>{getConsumed(this.state.previousMonthData)}</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
            <div className={`${classes['dashboard__stat-wrap']} ${classes['dashboard__stat-wrap--money']}`}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>earned</div>
                <span className={classes['dashboard__stat-value']}>{getEarned(this.state.previousMonthData)}</span>
                <span className={classes['dashboard__stat-units']}>€</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>spend</div>
                <span className={classes['dashboard__stat-value']}>{getSpent(this.state.previousMonthData)}</span>
                <span className={classes['dashboard__stat-units']}>€</span>
              </div>
            </div>
          </li>
          <li
            className={`${classes.dashboard__item} ${this.state.viewPeriod === 'year' && classes['dashboard__item--active']}`}
            onClick={() => this.handleSelectPeriod('year')}
          >
            <div className={classes['dashboard-item__title']}>previous year</div>
            <div className={classes.dashboard__date}>
              <span className={classes['dashboard__main-date']}>2018</span>
            </div>
            <div className={classes['dashboard__stat-wrap']}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>{getGenerated(this.state.previousYearData)}</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>{getConsumed(this.state.previousYearData)}</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
            <div className={`${classes['dashboard__stat-wrap']} ${classes['dashboard__stat-wrap--money']}`}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>earned</div>
                <span className={classes['dashboard__stat-value']}>{getEarned(this.state.previousYearData)}</span>
                <span className={classes['dashboard__stat-units']}>€</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>spend</div>
                <span className={classes['dashboard__stat-value']}>{getSpent(this.state.previousYearData)}</span>
                <span className={classes['dashboard__stat-units']}>€</span>
              </div>
            </div>
          </li>
        </ul>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={this.showChart(this.state.viewPeriod)}
            margin={{
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="8 3" />
            <XAxis dataKey="dateTime" fontSize={10} fontFamily="Verdana" />
            <YAxis fontSize={10} fontFamily="Verdana" />
            <Tooltip />
            <Legend />
            <Bar dataKey="generated" fill="#82ca9d" />
            <Bar dataKey="consumed" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <Button color="primary" className={classes['go-fwd-btn']} onClick={this.goToDetails}>
          energy details &rarr;
        </Button>
      </div>
    );
  }
}

const styles = theme => ({
  'page-title': {
    color: theme.primary,
    marginBottom: 30,
    fontSize: 32,
    fontFamily: 'Verdana',
    fontWeight: 'normal',
  },
  dashboard: {
    'max-width': '900px',
    padding: '0 20px',
    margin: '0 auto',
  },
  dashboard__list: {
    margin: '0 0 30px 0',
    padding: 0,
    'list-style': 'none',
    display: 'flex',
    '@media (max-width: 700px)': {
      // background: 'red',
      display: 'block',
    },
  },
  dashboard__item: {
    flex: 1,
    border: '1px solid #E6E8EB',
    'border-radius': '3px',
    overflow: 'hidden',
    cursor: 'pointer',
    'margin-right': '20px',
    '@media (max-width: 700px)': {
      'margin-right': 0,
      'margin-bottom': '20px',
    },
    '&:last-child': {
      'margin-right': 0,
    },
    '&:hover': {
      border: '1px solid #357CA2',
    },
  },
  'dashboard__item--active': {
    border: '1px solid #357CA2',

    '& $dashboard__stat-wrap--money': {
      background: '#357CA2',
      '& $dashboard__stat-title': {
        color: 'white',
      },
      '& $dashboard__stat-value': { color: 'white' },
      '& $dashboard__stat-units': { color: 'white' },
    },
  },
  'dashboard-item__title': {
    'font-size': '20px',
    color: '#357CA2',
    padding: '15px',
  },
  dashboard__date: {
    padding: '0 15px',
  },
  'dashboard__main-date': {
    color: '#000',
    fontSize: '16px',
  },
  'dashboard__secondary-date': {
    fontSize: '12px',
    'margin-left': '6px',
  },
  'dashboard__stat-wrap': {
    display: 'flex',
    padding: '15px',
  },
  'dashboard__stat-wrap--money': {
    background: '#F4F4F4',
    '& $dashboard__stat-value': {
      fontSize: '22px',
    },
  },
  'dashboard__stat-left': { flex: 1 },
  'dashboard__stat-right': { flex: 1 },
  'dashboard__stat-title': {
    fontSize: 12,
    color: '#828282',
    'margin-bottom': '2px',
  },
  'dashboard__stat-value': {
    fontSize: '18px',
  },
  'dashboard__stat-units': {
    fontSize: 12,
    display: 'inline-block',
    'margin-left': '5px',
  },
  'go-fwd-btn': {
    display: 'block',
    marginBottom: '40px',
    border: '1px solid #357CA2',
    'text-transform': 'none',
    overflow: 'hidden',
  },
});

export default withStyles(styles)(DashboardPage);
