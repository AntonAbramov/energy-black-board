import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import EnergyDetailsPage from './energyDetails/EnergyDetailsPage';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/energy" component={EnergyDetailsPage} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default Routes;
