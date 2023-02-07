import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "@fontsource/cairo";
import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index"

export default function SearchFields(props) {


    const dispatch = useDispatch();
    const { writeResult, writeData } = bindActionCreators(actionCreators, dispatch);

    const [trackNum, setTrackNum] = useState(null);

    const [data, setData] = useState();
    const getApiData = useCallback(async (trackNum) => {
        const response = await fetch(
            `https://tracking.bosta.co/shipments/track/${trackNum}`
        ).then((response) => response.json());
        setData(response);
    }, [])

    useEffect(() => {
        if (trackNum !== null) { getApiData(trackNum) }
    }, [trackNum, getApiData]);


    const handleChange = (e) => {
        const { value } = e.target;
        setTrackNum(value);
    };

    const handleClick = useCallback(
        (e) => {
            if (trackNum !== null) {
                if (data.status === "Not Found.") {
                    writeData(data)
                    writeResult(false)
                    props.handleResult(false)
                }
                else {
                    writeData(data)
                    writeResult(true)
                    props.handleResult(true + 1)
                }
            }

        }
        ,
        [writeData, data, trackNum, writeResult, props]
    );



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

                <TextField onChange={handleChange} id="standard-basic" label="رقم التتبع" variant="standard" style={{ textAlign: 'right' }} />
                <Button onClick={handleClick}
                    style={{ backgroundColor: "#E30613", color: 'white', width: '25px', height: '40px', borderRadius: '25px' }}>
                    <SearchIcon />
                </Button>
            </Box>
        </section>




    );
}