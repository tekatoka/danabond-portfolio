import React, { useState } from 'react';
import Input from "../input";
import Loading from '../loading';
import { send } from 'emailjs-com';

const Form = () => {

    const [isSent, setIsSent] = useState(false);
    const [sendingFailed, setSendingFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            toSend,
            PUBLIC_KEY
        )
            .then((response) => {
                setIsSent(true);
                setIsLoading(false);
            })
            .catch((err) => {
                setSendingFailed(true);
                setIsLoading(false);
                console.log('SENDING FAILED...', err);
            });
    };

    return (
        <>
            {isSent && <p className='success'>Danke {toSend.from_name}! Deine Nachricht wurde versendet.</p>}
            {sendingFailed && <p className='error'>Oops! Irgendwas ist schief gelaufen. Deine Nachricht konnte nicht gesendet werden. Bitte die Seite neu laden und erneut versuchen. Danke!</p>}
            {!isSent &&
                <form id="contact-form" onSubmit={onSubmit} style={{ position: "relative" }}>
                    {isLoading && <Loading />}
                    <Input type={'text'} id={'from_name'} name={'from_name'} placeholder={'Name'} value={toSend.from_name} required={true} onChange={(e) => handleChange(e)} />
                    <Input type={'email'} id={'from_email'} name={'from_email'} placeholder={'Email'} value={toSend.from_email} required={true} onChange={(e) => handleChange(e)} />
                    <Input type={'textarea'} id={'message'} name={'message'} placeholder={'Message'} value={toSend.message} required={true} onChange={(e) => handleChange(e)} />
                    <button type={'submit'}>Absenden</button>
                </form>
            }
        </>
    );
};

export default Form;

//https://dashboard.emailjs.com/
const SERVICE_ID = "service_cul6ddp";
const TEMPLATE_ID = "template_1p0s2j8";
const PUBLIC_KEY = "Ucs7CvuDe99A1Qj1g";