import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Chart extends Component {
  render() {
    const { classes, history } = this.props;
    return (<div>
      <h3>chart</h3>

      <Button color="primary" variant="contained" onClick={()=> history.push('/energy')}>Details</Button>
    </div>);
  }
}

const styles = theme => ({

});

export default withStyles(styles)(Chart);
