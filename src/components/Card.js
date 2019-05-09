import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

class Card extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.day}>today</div>
        <div className={classes.date}>
          14:55 <small>9 may 2019</small>
        </div>

        <section className={classes.bottom}>
          <div className={classes.produced}>
            <div className={classes.bottomTitle}>produced</div>
            <span className={classes.value}>123</span> <small>kW/h</small>
          </div>
          <div className={classes.used}>
            <div className={classes.bottomTitle}>used</div>
            <span className={classes.value}>903</span> <small>kW/h</small>
          </div>
        </section>
        <footer className={classes.footer} >
          <div className={classes.footerItem}>
            earned
            <div className={classes.amount}>257 <small>€</small></div>
          </div>
          <div className={classes.footerItem}>
            spend
            <div className={classes.amount}>4334 <small>€</small></div>
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
  },
  day: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#357CA2',
    marginBottom: 5,
  },
  date: {
    fontSize: '20px',
  },

  bottom: {
    display: 'flex',
    marginTop: 50,
    marginBottom: 16
  },
  bottomTitle: {
    fontSize: '15px',
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
    background: "#F4F4F4",
    margin: "0 -16px -16px -16px",
    padding: "16px",
    display: "flex",
  },
  footerItem: {
    flexGrow: 1,
  },

  amount: {
    fontSize: '26px'
  }
});

export default withStyles(styles)(Card);
