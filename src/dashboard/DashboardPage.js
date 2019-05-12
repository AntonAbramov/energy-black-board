import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

class DashboardPage extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <h1 className={classes['page-title']}>energy dashboard</h1>
        <ul className={classes.dashboard__list}>
          <li className={`${classes.dashboard__item} ${classes['dashboard__item--active']}`}>
            <div className={classes['dashboard-item__title']}>today</div>
            <div className={classes.dashboard__date}>
              <span className={classes['dashboard__main-date']}>14:55</span>
              <span className={classes['dashboard__secondary-date']}>21.05.2019</span>
            </div>
            <div className={classes['dashboard__stat-wrap']}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>123</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>256</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
            <div className={`${classes['dashboard__stat-wrap']} ${classes['dashboard__stat-wrap--money']}`}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>123</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>256</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
          </li>
          <li className={classes.dashboard__item}>
            <div className={classes['dashboard-item__title']}>today</div>
            <div className={classes.dashboard__date}>
              <span className={classes['dashboard__main-date']}>14:55</span>
              <span className={classes['dashboard__secondary-date']}>21.05.2019</span>
            </div>
            <div className={classes['dashboard__stat-wrap']}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>123</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>256</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
            <div className={`${classes['dashboard__stat-wrap']} ${classes['dashboard__stat-wrap--money']}`}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>123</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>256</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
          </li>
          <li className={classes.dashboard__item}>
            <div className={classes['dashboard-item__title']}>today</div>
            <div className={classes.dashboard__date}>
              <span className={classes['dashboard__main-date']}>14:55</span>
              <span className={classes['dashboard__secondary-date']}>21.05.2019</span>
            </div>
            <div className={classes['dashboard__stat-wrap']}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>123</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>256</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
            <div className={`${classes['dashboard__stat-wrap']} ${classes['dashboard__stat-wrap--money']}`}>
              <div className={classes['dashboard__stat-left']}>
                <div className={classes['dashboard__stat-title']}>generated</div>
                <span className={classes['dashboard__stat-value']}>123</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
              <div className={classes['dashboard__stat-right']}>
                <div className={classes['dashboard__stat-title']}>consumed</div>
                <span className={classes['dashboard__stat-value']}>256</span>
                <span className={classes['dashboard__stat-units']}>kW/h</span>
              </div>
            </div>
          </li>
        </ul>
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
    margin: 0,
    padding: 0,
    'list-style': 'none',
    display: 'flex',
  },
  dashboard__item: {
    flex: 1,
    border: '1px solid #E6E8EB',
    cursor: 'pointer',
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
  },
  'dashboard__stat-left': { flex: 1 },
  'dashboard__stat-right': { flex: 1 },
  'dashboard__stat-title': {
    fontSize: 12,
    color: '#828282',
    'margin-bottom': '2px',
  },
  'dashboard__stat-value': { fontWeight: 'bold' },
  'dashboard__stat-units': {
    fontSize: 12,
    display: 'inline-block',
    'margin-left': '5px',
  },
});

export default withStyles(styles)(DashboardPage);
