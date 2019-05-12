import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Routes from './routes';
import Header from './components/Header/header';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Routes />
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    margin: '0',
    padding: 0,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
});

export default withStyles(styles)(App);
