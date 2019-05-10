import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from '@material-ui/core/Button';
import { mockData } from '../energyDetails/mockData';

class Chart extends Component {
  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={mockData
              .filter((el, i) => i % 2 === 0)
              .filter((el, i) => i % 2 === 0)
              .filter((el, i) => i % 2 === 0)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dateTime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="generated" fill="#82ca9d" />
            <Bar dataKey="consumed" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <Button color="primary" variant="contained" onClick={() => history.push('/energy')}>
          Details
        </Button>
      </div>
    );
  }
}

const styles = theme => ({});

export default withStyles(styles)(Chart);
