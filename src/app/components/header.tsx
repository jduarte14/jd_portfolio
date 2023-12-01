import styles from './../styles/header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h3>JDuarte</h3>
            </div>
            <nav className={styles.navBar}>
                <a className={styles.link} href="/">About</a>
                <a className={styles.link} href="/">Work</a>
                <a className={styles.link} href="/">Testimonials</a>
                <a className={styles.link} href="/">Contact</a>
            </nav>
        </header>
    )
}

export default Header;