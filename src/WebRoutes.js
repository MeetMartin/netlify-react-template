import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page404 from './pages/404.js';
import HomePage from './pages/HomePage.js';

const WebRoutes = () => (
    <Routes>
        <Route exact path='/' component={HomePage} />

        <Route component={Page404} />
    </Routes>
);

export default WebRoutes;