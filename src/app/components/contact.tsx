import styles from './../styles/contact.module.css';
import { EarthCanvas } from './canvas/earth';
import { StarsComponent } from './canvas/stars';
import Form from './form';


const Contact = () => {
    return (
        <div style={{position:"relative"}}>
            <section className={styles.section} >
                <Form/>
                <EarthCanvas />
            </section>
            <aside className={styles.aside}>
                <StarsComponent/>
            </aside>
        </div>
    )
}

export default Contact;