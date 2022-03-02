import React, { useEffect } from 'react';

const Page = ({ children }) => {

    // be on the top of the page when the page is opened
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <main>
            { children }
        </main>
    );
};

export default Page;