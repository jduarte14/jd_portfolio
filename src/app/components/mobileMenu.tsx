'use client'
import React, { useState } from 'react';
import styles from './../styles/header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const MobileMenu: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(prevState => !prevState);
  };

  return (
    <>
      <button className={styles.hamburguer} onClick={handleSidebar}>
        <GiHamburgerMenu />
      </button>
      <aside className={sidebar ? styles.mobile_menu : styles.mobile_menu_hide}>
        <a className={styles.link} href="#about">
          About
        </a>
        <a className={styles.link} href="#work">
          Work
        </a>
        <a className={styles.link} href="#testimonials">
          Testimonials
        </a>
        <a className={styles.link} href="#contact">
          Contact
        </a>
      </aside>
      {sidebar ? <div className={styles.overlay} onClick={handleSidebar} /> : null}
    </>
  );
};

export default MobileMenu;
