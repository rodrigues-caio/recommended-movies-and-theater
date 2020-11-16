import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/SingleRoom';
import Error from '../pages/Error';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/rooms/:slug" component={SingleRoom} />
    <Route component={Error} />
  </Switch>
);

export default Router;
