import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Page from './Page.js';

/**
 * Application 404 page component
 * @returns {JSX}
 */
const Page404 = () => {
    return (
        <Page>
            <Helmet>
                <title>404 Not Found | Netlify React Web Template</title>
            </Helmet>
            <h1>Not Found</h1>
            <p>
                This is not the page that you are looking for!
            </p>
            <Link to='/'>Go Home</Link>
        </Page>
    );
};

export default Page404;