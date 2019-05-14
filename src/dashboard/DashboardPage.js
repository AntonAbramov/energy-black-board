import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Spinner from '../common/spinner/spinner';
import Title from '../common/typography/Title';
import Card from '../components/Card/Card';
import Chart from '../components/Chart';
import { fetchData } from '../common/utils';

class DashboardPage extends Component {
  state = {
    active: 'day',
    cards: [],
    cardYear: [],
  };

  componentDidMount() {
    setTimeout(() => {
      fetchData('/day.json')
        .then(res => {
          this.setState(state => {
            state.cards.push({
              period: 'day',
              data: res,
            });
            return state;
          });
        })
        .then(() => {
          fetchData('/month.json').then(res => {
            this.setState(state => {
              state.cards.push({
                period: 'month',
                data: res,
              });
              return state;
            });
          });
          fetchData('/year.json').then(res => {
            this.setState(state => {
              state.cards.push({
                period: 'year',
                data: res,
              });
              return state;
            });
          });
        });
    }, 300);
  }

  renderCard = () => {
    return this.state.cards.map((item, idx) => (
      <Card
        key={idx}
        selected={this.state.active === item.period}
        info={item}
        onClick={this.cardClickHandler(item.period)}
      />
    ));
  };

  cardClickHandler = val => () => {
    this.setState({ active: val });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Title className={classes.title}>Energy statistics</Title>
        <section className={classes.container}>{this.state.cards.length ? this.renderCard() : <Spinner loading={true} size={40} /> }</section>
        <Chart history={this.props.history} />
      </Fragment>
    );
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    marginLeft: -theme.spacing.unit,
    marginRight: -theme.spacing.unit,
    marginBottom: theme.spacing.unit*4,
  },
  title: {
    color: theme.primary,
    marginBottom: 30,
  },
  item: {},
});

export default withStyles(styles)(DashboardPage);
