import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rzm5arm', 'template_8h4ly2m', form.current, 'Fuvp0yO6jL2Qn51ZN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert('Your mail have been send')

    };
    return (
        <div className='m-5 p-5'>
            <h1 className='text-white mb-4'>Contact With Me</h1>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input className='w-50 mb-2' placeholder='Name' type="text" name="user_name" />
                    <br />
                    <input className='w-50 mb-2' placeholder='E-mail' type="email" name="user_email" />
                    <br />
                    <textarea className='w-50 mb-2' placeholder='Your massege' name="message" />
                    <br />
                    <input className='px-5' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;