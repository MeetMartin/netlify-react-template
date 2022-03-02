import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page404 from './pages/404.js';
import HomePage from './pages/HomePage.js';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />

        <Route component={Page404} />
    </Switch>
);

export default Routes;