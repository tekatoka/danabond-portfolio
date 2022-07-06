import React, { useState } from 'react';
import Input from "../input";
import { send } from 'emailjs-com';

const Form = () => {

    const [isSent, setIsSent] = useState(false);
    const [sendingFailed, setSendingFailed] = useState(false);
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
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            toSend,
            PUBLIC_KEY
        )
            .then((response) => {
                setIsSent(true);
            })
            .catch((err) => {
                setSendingFailed(true);
                console.log('FAILED...', err);
            });
    };

    return (
        <>
            {isSent && <p className='success'>Thank you {toSend.from_name}! Your message has been sent.</p>}
            {sendingFailed && <p className='error'>Oops... something went wrong. Your message could not be sent. Please reload the page and try again. Thanks!</p>}
            {!isSent &&
                <form id="contact-form" onSubmit={onSubmit}>
                    <Input type={'text'} id={'from_name'} name={'from_name'} placeholder={'Name'} value={toSend.from_name} required={true} onChange={(e) => handleChange(e)} />
                    <Input type={'email'} id={'from_email'} name={'from_email'} placeholder={'Email'} value={toSend.from_email} required={true} onChange={(e) => handleChange(e)} />
                    <Input type={'textarea'} id={'message'} name={'message'} placeholder={'Message'} value={toSend.message} required={true} onChange={(e) => handleChange(e)} />
                    <button type={'submit'}>Send</button>
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