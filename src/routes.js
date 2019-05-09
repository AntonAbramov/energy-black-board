import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import NotFound from './components/notFound/notFound';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
