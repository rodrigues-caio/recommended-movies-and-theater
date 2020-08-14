import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
 
const Router = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/logon" component={LogIn} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Router;