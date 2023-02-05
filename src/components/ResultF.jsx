import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import "@fontsource/cairo";


export default function ResultF() {
    return (
        <section style={{
            paddingTop: '50px'

        }}>
            <span style={{
                fontFamily: 'cairo',
                fontSize: '18px',
                fontWeight: 600,
                color: '#475467',
                textDecoration: 'none',
            }}>  رقم الشحنة </span>
            <Stack sx={{ width: '100%', textAlign: 'center' }} spacing={2} >
                <Alert severity="warning" style={{ borderRadius: "5px", margin: "5%" }}>
                    <AlertTitle style={{
                        fontFamily: 'cairo',
                        fontSize: '15px',
                        fontWeight: 100,
                        color: 'black',
                        textDecoration: 'none',
                    }}>لا يمكن العثور على أي سجل لرقم التتبع هذا في الوقت الحالي ، يرجى التحقق من الرقم والمحاولة مرة أخرى لاحقًا. لمزيد من المساعدة ، يرجى التواصل بخدمة العملاء.</AlertTitle>
                </Alert>

            </Stack>
        </section>

    );
}