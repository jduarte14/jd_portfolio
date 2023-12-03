import React from 'react';
import styles from './../styles/header.module.css';
import MobileMenu from './mobileMenu';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h3>JDuarte</h3>
      </div>
      <nav className={styles.navBar}>
        <a className={styles.link} href="#about">About</a>
        <a className={styles.link} href="#work">Work</a>
        <a className={styles.link} href="#testimonials">Testimonials</a>
        <a className={styles.link} href="#contact">Contact</a>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
