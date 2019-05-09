import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class EnergyDetailsPage extends Component {
  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <h1>Energy Details page</h1>
        <Button color="primary" variant="contained" onClick={history.goBack}>Back</Button>
      </div>
    );
  }
}

const styles = theme => ({
  root: {},
});

export default withStyles(styles)(EnergyDetailsPage);
