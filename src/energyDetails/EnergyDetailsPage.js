import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { mockData } from './mockData';

class EnergyDetailsPage extends Component {
  state = {
    value: '',
    data: [],
    radioButtonValue: 'comparison',
  };

  handleChangeValue = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleChangePreview = e => {
    this.setState({ radioButtonValue: e.target.value });
  };

  render() {
    const { classes, history } = this.props;
    const { value, data, radioButtonValue } = this.state;
    return (
      <div className={classes}>
        <h1 className={classes.title}>energy statistics</h1>
        <Button color="primary" variant="contained" onClick={history.goBack} className={classes.goBackButton}>
          Back
        </Button>
        <div className={classes.dateFields}>
          <TextField
            id="date"
            label="date"
            type="date"
            value={value}
            // defaultValue="2017-05-24"
            onChange={this.handleChangeValue}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary">compare with another date</Button>
        </div>

        <RadioGroup
          aria-label="Gender"
          name="gender1"
          value={radioButtonValue}
          onChange={this.handleChangePreview}
          className={classes['preview-mode']}
        >
          <FormControlLabel value="comparison" control={<Radio color="primary" />} label="comparison" />
          <FormControlLabel value="generated" control={<Radio color="primary" />} label="generated" />
          <FormControlLabel value="consumed" control={<Radio color="primary" />} label="consumed" />
        </RadioGroup>

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
            <Bar dataKey="generated" fill="#8884d8" />
            <Bar dataKey="consumed" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ul className={classes['detail-list']}>
          {mockData.map(item => {
            return (
              <li className={classes['detail-list__item']} key={`${item.generated}-${item.consumed}`}>
                <span className={classes['detail-list__time-period']}>{item.dateTime.split(' ')[1]}</span>
                <span className={classes['detail-list__statistics']}>
                  <span className={classes['detail-list__generated']}>{item.generated}</span>
                  <span className={classes['detail-list__consumed']}>{item.consumed}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const styles = theme => ({
  goBackButton: {
    display: 'block',
    marginBottom: '20px',
  },
  title: {
    color: theme.primary,
    marginBottom: 30,
    fontSize: 32,
    fontFamily: 'Verdana',
    fontWeight: 'normal',
  },
  dateFields: {
    marginBottom: 20,
  },
  'detail-list': {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    // 'max-width': '500px',
  },
  'detail-list__item': {
    'border-bottom': '1px solid #E4E4E4',
    fontSize: '16px',
    display: 'flex',
    padding: '15px',
  },
  'detail-list__time-period': {
    flex: 1,
  },
  'detail-list__statistics': {
    flex: 1,
    textAlign: 'right',
  },
  'detail-list__generated': {
    display: 'block',
  },
  'detail-list__consumed': {
    color: '#828282',
    fontSize: '12px',
    display: 'block',
  },
  'preview-mode': {
    padding: '20px',
    display: 'block',
  },
});

export default withStyles(styles)(EnergyDetailsPage);
