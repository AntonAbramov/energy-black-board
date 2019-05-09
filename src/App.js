import React, { Component } from 'react';
import Routes from './routes';
import { withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Routes />
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    maxWidth: 1280,
    margin: "0 auto",
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
});

export default withStyles(styles)(App);
