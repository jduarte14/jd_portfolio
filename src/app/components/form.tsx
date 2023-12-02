'use client'
import React, { useRef, FormEvent } from 'react';
import styles from './../styles/contact.module.css';
import emailjs from '@emailjs/browser';


const Form: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const message = useRef<HTMLInputElement>(null);
    const username = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        console.log(process.env.SERVICE_ID,'asd')
        if (form.current && message.current && username.current && emailRef.current) {
            emailjs
            .sendForm(process.env.SERVICE_ID ?? '', process.env.TEMPLATE_ID ?? '', form.current, process.env.USER_ID ?? '')
            .then(
                    (response) => {
                        if (response.status === 200) {
                            form.current!.reset();
                            alert("Emaill sended ill contact you soon!");
                        } 
                           
                        else {
                            throw new Error('There was an error sending the email');
                        }
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_info}>
                    <p>Get in touch</p>
                    <h3>Contact</h3>
                </div>
                <form id="contact" onSubmit={sendEmail} ref={form}>
                    <label htmlFor="username">Your name</label>
                    <input
                        type="text"
                        placeholder="What's your name?"
                        id="username"
                        ref={username}
                        required
                    />
                    <label htmlFor="email">Your email</label>
                    <input
                        type="text"
                        placeholder="What's your email?"
                        id="email"
                        ref={emailRef}
                        required
                    />
                    <label htmlFor="message">Your message</label>
                    <input
                        type="text"
                        placeholder="What you want to say?"
                        id="message"
                        ref={message}
                        required
                    />
                    <input type="submit" value="Send" className={styles.btn} />
                </form>
            </div>
        </>
    );
};

export default Form;
