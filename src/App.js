import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Routes from './Routes.js';

import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyle  = createGlobalStyle`
    html, body {
        height: 100%;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Router>
                <Routes />
            </Router>
            <Footer />
        </>
    );
};

export default App;