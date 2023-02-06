import React from 'react';
import "@fontsource/cairo";
// import { useSelector } from 'react-redux'



const ResultT = () => {

    // const state = useSelector((state) => state.data);
    // console.log(state)

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
            }}> 654654 رقم الشحنة </span><br></br>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '28px',
                fontWeight: 600,
                color: '#111619',
                textDecoration: 'none',
            }}>   تم تسليم الاوردر </span>
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
                <hr style={{ width: '30%', height: '20%', backgroundColor: '#0098A5', border: '5px #0098A5', borderRadius: "5px 0px 0px 5px" }}></hr>
            </div>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '17px',
                fontWeight: 600,
                color: '#111619',
                textDecoration: 'none',
            }}>  التاجر طلب استلام الشحنة, سنقوم بالاستلام قريبا سبت, ٢٢ مايو ٢٠٢١</span><br></br>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '14px',
                fontWeight: 600,
                color: '#667085',
                textDecoration: 'none',
            }}> اخر تحديث منذ 624 يوم مضت</span>
        </div>
    );
};

export default ResultT;