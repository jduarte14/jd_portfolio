import React from 'react';
import styles from './../styles/contact.module.css';
import { EarthCanvas } from './canvas/earth';
import { StarsComponent } from './canvas/stars';
import Form from './form';
import Buttons from './buttons';

const Contact: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <section className={styles.section}>
        <Form />
        <EarthCanvas />
      </section>
      <aside className={styles.aside}>
        <StarsComponent />
      </aside>
      <Buttons />
    </div>
  );
};

export default Contact;
