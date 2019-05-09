import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

class EnergyDetailsPage extends Component {
  render() {
    return (
      <div>
        <h1>Energy Details page</h1>
      </div>
    );
  }
}

const styles = theme => ({
  root: {},
});

export default withStyles(styles)(EnergyDetailsPage);
