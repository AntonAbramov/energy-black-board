import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

class DashboardPage extends Component {
  render() {
    return <div>Dashboard page</div>;
  }
}

const styles = theme => ({
  root: {},
});

export default withStyles(styles)(DashboardPage);
