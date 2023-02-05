import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "@fontsource/cairo";
import { useState, useEffect } from 'react';


export default function BasicTextFields() {

    const [data, setData] = useState();

    const getApiData = async () => {
        const response = await fetch(
            "https://tracking.bosta.co/shipments/track/7234258?lang=ar"
        ).then((response) => response.json());
        setData(response);
    };
    useEffect(() => {
        getApiData();
    }, []);
    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <section style={{
            paddingTop: '70px'

        }}>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '20px',
                fontWeight: 400,
                color: '#475467',
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
                <Button style={{ backgroundColor: "#E30613", color: 'white', width: '25px', height: '40px', borderRadius: '25px' }}>
                    <SearchIcon />
                </Button>
            </Box>
        </section>




    );
}