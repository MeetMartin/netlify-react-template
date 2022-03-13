import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    clear: both;
    margin-top: 0;
    padding: 20px 5px 20px 5px;
    @media only screen and (min-width: 768px) {
        padding: 0 40px 40px 40px;
    }
`;

const Header = () => 
    <HeaderDiv>
        <a href='/' title='Netlify React Web Template'>
            Netlify React Web Template
        </a>
    </HeaderDiv>;

export default Header;