import styles from './../styles/contact.module.css';
import { EarthCanvas } from './canvas/earth';
import { StarsComponent } from './canvas/stars';
import React from 'react';
const Contact = () => {
    return (
        <div style={{position:"relative"}}>
            <section className={styles.section} >
                <div className={styles.container}>
                    <div className={styles.container_info}>
                        <p>Get in touch</p>
                        <h3>Contact</h3>
                    </div>
                    <form action="" id="contact">
                        <label htmlFor="">
                            Your name
                        </label>
                        <input type="text" placeholder="What's your name?" />
                        <label htmlFor="">
                            Your email
                        </label>
                        <input type="text" placeholder="What'e your email?" />
                        <label htmlFor="">
                            Your message
                        </label>
                        <input type="placeholder" placeholder="What you want to say?" />
                        <input type="submit" value="Send" className={styles.btn}/>
                    </form>
                </div>
                <EarthCanvas />
            </section>
            <aside className={styles.aside}>
                <StarsComponent/>
            </aside>
        </div>
    )
}

export default Contact;