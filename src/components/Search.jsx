import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "@fontsource/cairo";


export default function BasicTextFields() {
    return (
        <section style={{
            paddingTop: '50px'

        }}>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '20px',
                fontWeight: 400,
                color: 'gray',
                textDecoration: 'none',
            }}>تتبع شحنتك</span>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40%' },
                }}
                noValidate
                autoComplete="off"
                style={{
                    fontFamily: 'cairo',
                    fontSize: '30px',
                    fontWeight: 900,
                    textDecoration: 'none',
                }}
            >

                <TextField id="standard-basic" label="رقم التتبع" variant="standard" style={{ textAlign: 'right' }} />
                <Button style={{ backgroundColor: "red", color: 'white', width: '25px', height: '40px', borderRadius: '25px' }}>
                    <SearchIcon />
                </Button>
            </Box>
        </section>




    );
}