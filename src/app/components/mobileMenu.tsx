'use client'
import styles from './../styles/header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        sidebar ? setSidebar(false) : setSidebar(true);
    }
    return (
        <>

            <button className={styles.hamburguer} onClick={handleSidebar}>
                <GiHamburgerMenu />

            </button>
            <aside className={sidebar ? styles.mobile_menu : styles.mobile_menu_hide}>
                <a className={styles.link} href="#about">About</a>
                <a className={styles.link} href="#work">Work</a>
                <a className={styles.link} href="#testimonials">Testimonials</a>
                <a className={styles.link} href="#contact">Contact</a>
            </aside>
            {
                sidebar ? <div className={styles.overlay} onClick={handleSidebar} /> : null
            }

        </>
    )
}

export default MobileMenu;