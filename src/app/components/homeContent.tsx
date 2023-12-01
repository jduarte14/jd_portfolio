import styles from './../styles/home_content.module.css';

const HomeContent = () => {
    return (
        <section className={styles.section}>
            <div className={styles.banner_info}>
                <div className={styles.container}>
                    <div className={styles.circle}></div>
                    <div className={styles.rectangle}></div>
                </div>
                <div className={styles.info}>
                    <h1>Hi, I&apos;m <b>Joaquin</b> </h1>
                    <p>
                        Im a Front-end Developer <br />
                        who is always self developing new ways <br />
                        to style your site.
                    </p>
                </div>
                <div className={styles.custom_container}>
                    <div className={styles.custom_cirlce}></div>
                </div>

            </div>

        </section>
    )
}

export default HomeContent