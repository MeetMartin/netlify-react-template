import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Page from './Page.js';

const HomePage = () => {
    return (
        <Page>
            <Helmet>
                <title>Homepage | Netlify React Web Template</title>
                <meta property='og:title' content="Homepage | Netlify React Web Template" />
                <meta name='twitter:title' content="Homepage | Netlify React Web Template" />
                <meta name='description' content='Netlify React Web Template.' />
                <meta name='og:description' content='Netlify React Web Template.' />
                <meta name='twitter:description' content='Netlify React Web Template.' />
                <meta property='og:locale' content='en_EN' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='' />
                <meta property='twitter:image' content='' />
                <meta name='twitter:card' content='summary_large_image' />
            </Helmet>
            <h1>
                Homepage<br />
                Netlify React Web Template
            </h1>
            <p>
                Per aspera ad astra.
            </p>
        </Page>
    );
};

export default HomePage;