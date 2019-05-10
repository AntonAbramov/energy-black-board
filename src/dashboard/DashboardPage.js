import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Spinner from '../common/spinner/spinner';
import Title from '../common/typography/Title';
import Card from '../components/Card';
import Chart from '../components/Chart';

class DashboardPage extends Component {
  state = {
    active: 1,
  };

  renderCard = () => {
    const res = [];
    for (let i = 0; i < 3; i++) {
      res.push(<Card key={i} selected={this.state.active === i} onClick={this.cardClickHandler(i)} />);
    }
    return res;
  };

  cardClickHandler = index => () => {
    this.setState({ active: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Title className={classes.title}>Energy statistics</Title>
        {/*<Spinner loading={true} size={40} /> */}
        <section className={classes.container}>{this.renderCard()}</section>
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: -theme.spacing.unit,
    marginRight: -theme.spacing.unit,
  },
  title: {
    color: theme.primary,
    marginBottom: 30,
  },
  item: {},
});

export default withStyles(styles)(DashboardPage);
