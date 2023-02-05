import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "@fontsource/cairo";
import BasicMenu from './LangBtn'
import logo from '../assets/logo.png';
import "@fontsource/cairo";


function ResponsiveAppBar() {

    return (
        <AppBar position="static" style={{
            backgroundColor: "white", boxShadow: 'none'
        }} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between'
                }}>
                    <section style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <img src={logo} alt="logo" style={{ width: '70px' }}></img>
                        <span style={{
                            fontFamily: 'cairo',
                            fontSize: '30px',
                            fontWeight: 900,
                            color: 'red',
                            textDecoration: 'none',
                        }}>بوسطة</span>

                    </section>

                    <BasicMenu />


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;