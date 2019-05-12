import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';
// import { mockData } from './mockData';
import { getDay, getHours, getMonth, getYear, DAY_TIME_TEMPLATE } from '../mockDataFactory/index';

class EnergyDetailsPage extends Component {
  state = {
    radioButtonValue: 'comparison',
    previewData: moment(new Date()).format('YYYY-MM-DD'),
    energyData: [],
  };

  componentDidMount() {
    const {
      history,
      match: {
        params: { dateTime: pathDateTime },
      },
    } = this.props;

    const mmPathDateTime = moment(pathDateTime, 'DD.MM.YYYY', true);
    console.log(mmPathDateTime.isValid());

    if (mmPathDateTime.isValid()) {
      this.setState({
        previewData: mmPathDateTime.format('YYYY-MM-DD'),
        energyData: getDay(mmPathDateTime.format('DD.MM.YYYY')),
      });
      console.log('is valid...');
    } else {
      history.push(`/energy/${moment(this.state.previewData).format('DD.MM.YYYY')}`);
      console.log('!!! is INvalid...');
    }

    // const formattedPathDateTime = moment(pathDateTime).format('YYYY-DD-MM');

    // if (moment(pathDateTime).isValid() && formattedPathDateTime && formattedPathDateTime !== 'Invalid date') {
    //   this.setState({
    //     previewData: formattedPathDateTime,
    //     energyData: getDay(pathDateTime),
    //   });
    // } else {
    //   this.setState({
    //     energyData: getDay(this.state.previewData),
    //   });
    //   history.push(`/energy/${this.state.previewData}`);
    // }

    // if (pathDate) {
    //   this.setState({
    //     previewData: decodeURIComponent(pathDate),
    //     energyData: getDay(pathDate),
    //   });
    // } else {
    //   history.push(`/energy/${moment(new Date(), DAY_TIME_TEMPLATE).format(DAY_TIME_TEMPLATE)}`);
    //   this.setState({
    //     previewData: moment(new Date(), DAY_TIME_TEMPLATE).format(DAY_TIME_TEMPLATE),
    //   });
    // }
    // console.log(pathDate);
    // console.log(getDay('01.05.2019 04:15'));
    // console.log(getHours(moment(new Date(), DAY_TIME_TEMPLATE).format(DAY_TIME_TEMPLATE)));
    // console.log(moment(new Date(), DAY_TIME_TEMPLATE).format(DAY_TIME_TEMPLATE));
  }

  handleChangeDate = e => {
    const { value } = e.target;
    const { history } = this.props;
    history.push(`/energy/${moment(value).format('DD.MM.YYYY')}`);
    this.setState({
      previewData: moment(value).format('YYYY-MM-DD'),
      energyData: getDay(moment(value).format('DD.MM.YYYY')),
    });
  };

  handleChangePreview = e => {
    this.setState({ radioButtonValue: e.target.value });
  };

  render() {
    const { classes, history } = this.props;
    const { previewData, radioButtonValue } = this.state;

    return (
      <div className={classes['energy-details-page']}>
        <h1 className={classes['page-title']}>energy details</h1>
        <Button color="primary" onClick={() => history.push('/dashboard')} className={classes['go-back-btn']}>
          &larr; energy dashboard
        </Button>
        <div className={classes.dateFields}>
          <TextField
            id="date"
            label="date"
            type="date"
            value={previewData}
            // defaultValue="2019-05-01"
            onChange={this.handleChangeDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary" className={classes['add-new-date-btn']}>
            &#43; compare with another date
          </Button>
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
            data={this.state.energyData
              .map(item => ({
                dateTime: item.dateTime.split(' ')[1],
                generated: item.generated,
                consumed: item.consumed,
              }))
              .filter((el, i) => i % 2 === 0)
              .filter((el, i) => i % 2 === 0)
              .filter((el, i) => i % 2 === 0)}
            margin={{
              top: 30,
              // right: 30,
              // left: 30,
              bottom: 30,
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

        <ul className={classes['detail-list']}>
          <li className={classes['detail-list__item']} key="111111">
            <span className={classes['detail-list__time-period']}>
              <span className={classes['detail-list__head']}>timeline</span>
            </span>
            <span className={classes['detail-list__statistics']}>
              <span className={classes['detail-list__head']}>generated/consumed kwt/H</span>
            </span>
          </li>
          {this.state.energyData.map(item => {
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
  'energy-details-page': {
    'max-width': '900px',
    padding: '0 20px',
    margin: '0 auto',
  },
  'go-back-btn': {
    display: 'block',
    marginBottom: '40px',
    border: '1px solid #357CA2',
    'text-transform': 'none',
  },
  'add-new-date-btn': {
    border: '1px solid #357CA2',
    'text-transform': 'none',
    margin: '10px 0 0 30px',
  },
  'page-title': {
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
  },
  'detail-list__head': {
    color: '#357CA2',
    fontSize: '20px',
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
    color: '#82ca9d',
  },
  'detail-list__consumed': {
    color: '#8884d8',
    fontSize: '12px',
    display: 'block',
  },
  'preview-mode': {
    padding: '20px 0',
    display: 'block',
  },
});

export default withStyles(styles)(EnergyDetailsPage);
