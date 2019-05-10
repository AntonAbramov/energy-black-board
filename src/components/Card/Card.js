import React, { Component } from 'react';
import cns from 'classnames';
import { withStyles } from '@material-ui/core';
import { parseData } from './utils';

class Card extends Component {
  render() {
    const { classes, selected, onClick, data, period } = this.props;
    const formatedData = parseData(data);
    return (
      <div onClick={onClick} className={cns(classes.card, { [classes.cardActive]: selected })}>
        <div className={classes.day}>today</div>
        <div className={classes.date}>
          14:55 <small>9 may 2019</small>
        </div>

        <section className={classes.bottom}>
          <div className={classes.produced}>
            <div className={classes.bottomTitle}>produced</div>
            <span className={classes.value}>{formatedData.generated}</span> <small>kW/h</small>
          </div>
          <div className={classes.used}>
            <div className={classes.bottomTitle}>used</div>
            <span className={classes.value}>{formatedData.consumed}</span> <small>kW/h</small>
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
    fontSize: '18px',
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
    fontSize: '26px',
  },
});

export default withStyles(styles)(Card);
