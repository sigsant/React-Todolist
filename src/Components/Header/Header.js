import React from 'react';
import { Typography, Container } from '@material-ui/core';


import './Header.css';

const Header = (props) => {

    return(
                <Container maxWidth="sm">
                    <Typography variant="h4" align="center" id="header-title">
                        React-TodoList
                    </Typography>
                </Container>
    )
}

export default Header;