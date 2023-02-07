import React from 'react';
import "@fontsource/cairo";
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import dateFormat from 'dateformat';


const ResultT = () => {

    const data = useSelector((state) => state.store.data);

    const [trackNum, setTrackNum] = useState();
    const [shipmentState, setshipmentState] = useState();
    const [timeStamp, setSimeStamp] = useState();
    const [transitEvents, setTransitEvents] = useState();
    const [shipmentStateDTS, setTransitEventsDTS] = useState();

    useEffect(() => {
        setTrackNum(data.TrackingNumber)
        setshipmentState(data.CurrentStatus.state)
        if (shipmentState === "DELIVERED") { setTransitEventsDTS(true) } else { setTransitEventsDTS(false) }
        setSimeStamp(dateFormat(data.CurrentStatus.timestamp, "dddd, mmmm dS, yyyy"))
        setTransitEvents(data.TransitEvents)
    }, [data.TrackingNumber, data.CurrentStatus.state, data.CurrentStatus.timestamp, trackNum, shipmentState, timeStamp, transitEvents, data.TransitEvents, shipmentStateDTS]);





    return (
        <div style={{
            paddingTop: '50px'

        }}>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '18px',
                fontWeight: 600,
                color: '#475467',
                textDecoration: 'none',
            }}>  رقم الشحنة {trackNum}</span><br></br>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '28px',
                fontWeight: 600,
                color: '#111619',
                textDecoration: 'none',
            }}>   {shipmentState} </span>
            <div style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
                paddingRight: '10%',
                paddingLeft: '10%',
                height: '30px'
            }}>
                <hr style={{ width: '30%', height: '20%', backgroundColor: '#0098A5', border: '5px #0098A5', borderRadius: "0px 5px 5px 0px" }}></hr>
                <hr style={{ width: '30%', height: '20%', backgroundColor: '#0098A5', border: '5px #0098A5', }}></hr>
                {shipmentStateDTS ? <hr style={{ width: '30%', height: '20%', backgroundColor: '#0098A5', border: '5px #0098A5', borderRadius: "5px 0px 0px 5px" }}></hr>
                    : <hr style={{ width: '30%', height: '20%', backgroundColor: '#D9F4A8', border: '5px #D9F4A8', borderRadius: "5px 0px 0px 5px" }}></hr>
                }

            </div>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '17px',
                fontWeight: 600,
                color: '#111619',
                textDecoration: 'none',
            }}> {timeStamp} </span><br></br>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '14px',
                fontWeight: 600,
                color: '#667085',
                textDecoration: 'none',
            }}> اخر تحديث منذ  يوم مضت</span>
        </div >
    );
};

export default ResultT;