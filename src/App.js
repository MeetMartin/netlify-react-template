import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import WebRoutes from './WebRoutes.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

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
            <BrowserRouter>
                <WebRoutes />
            </BrowserRouter>
            <Footer />
        </>
    );
};

export default App;