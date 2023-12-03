'use client'
import styles from './../styles/buttons.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuFileDown } from "react-icons/lu";
const Buttons = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <a className={styles.blank_button} href="/files/Resume_Joaquin_Duarte.pdf" download>
                        <LuFileDown />
                    </a>
                    <p>
                        Download my resume
                    </p>
                </div>
                <div className={styles.row}>
                    <a className={styles.blank_button} href="https://www.github.com/jduarte14" target='_blank'>
                        <FaGithub />
                    </a>
                    <p>
                        Watch my repos <b>!</b>
                    </p>
                </div>
                <div className={styles.row}>
                    <a className={styles.blank_button} href="https://www.linkedin.com/in/joaquin-duarte-401645224/" target='_blank'>
                        <FaLinkedin />
                    </a>
                    <p>
                        Contact me on Linkedin
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Buttons;