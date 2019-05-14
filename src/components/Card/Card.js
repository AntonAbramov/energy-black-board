import React, { Component } from 'react';
import cns from 'classnames';
import { withStyles } from '@material-ui/core';
import { parseData, getDateInfo } from './utils';
import moment from 'moment';

class Card extends Component {
  state = {
    currentTime: null,
  };

  componentDidMount() {
    this.setState({
      currentTime: moment().format('h:mm:ss')
    });
    setInterval(() => {
      if (moment().format('h:mm:ss') > moment().format(this.state.currentTime)) {
        this.setState({
          currentTime: moment().format('h:mm:ss'),
        });
      }
    }, 50);
  }

  render() {
    const { classes, selected, onClick, info } = this.props;
    const formatedData = parseData(info.data);
    return (
      <div onClick={onClick} className={cns(classes.card, { [classes.cardActive]: selected })}>
        <div className={classes.day}>{getDateInfo(info.period).name}</div>
        <div className={classes.date}>
          {info.period === 'day' ? this.state.currentTime : null}
          <small> {getDateInfo(info.period).date}</small>
        </div>

        <section className={classes.bottom}>
          <div className={classes.produced}>
            <div className={classes.bottomTitle}>produced</div>
            <span className={classes.value}>
              {formatedData.generated} <small>kW/h</small>
            </span>
          </div>
          <div className={classes.used}>
            <div className={classes.bottomTitle}>used</div>
            <span className={classes.value}>
              {formatedData.consumed} <small>kW/h</small>
            </span>
          </div>
        </section>
        <footer className={classes.footer}>
          <div className={classes.footerItem}>
            earned
            <div className={classes.amount}>
              {formatedData.earned} <small>{formatedData.currency}</small>
            </div>
          </div>
          <div className={classes.footerItem}>
            spend
            <div className={classes.amount}>
              {formatedData.spent} <small>{formatedData.currency}</small>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const styles = theme => ({
  card: {
    padding: theme.spacing.unit * 2,
    border: '1px solid #E6E8EB',
    flexGrow: 1,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    width: '33.3332%',
    justifyContent: 'space-between',
  },
  cardActive: {
    borderColor: '#357CA2',
    cursor: 'default',
    '& $day': {},
    '& footer': {
      background: '#357CA2',
      color: '#fff',
    },
  },
  day: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#357CA2',
    marginBottom: 5,
  },
  date: {
    fontSize: '16px',
  },

  bottom: {
    display: 'flex',
    marginTop: 50,
    marginBottom: 16,
  },
  bottomTitle: {
    fontSize: '14px',
    color: '#828282',
    marginBottom: 5,
  },
  produced: {
    flexGrow: 1,
  },
  used: {
    flexGrow: 1,
  },
  value: {
    fontSize: '15px',
    whiteSpace: 'nowrap',
  },
  footer: {
    background: '#F4F4F4',
    borderTop: '1px solid #E6E8EB',
    margin: '0 -16px -16px -16px',
    padding: '16px',
    display: 'flex',
  },
  footerItem: {
    flexGrow: 1,
  },

  amount: {
    fontSize: '20px',
  },
});

export default withStyles(styles)(Card);
