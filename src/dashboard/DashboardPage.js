import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Spinner from '../common/spinner/spinner';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard page</h1>
        <Spinner loading={true} size={40} />
      </div>
    );
  }
}

const styles = theme => ({
  root: {},
});

export default withStyles(styles)(DashboardPage);
