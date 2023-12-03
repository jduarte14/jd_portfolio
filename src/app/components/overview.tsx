'use client'
import styles from './../styles/overview.module.css';
import Image from 'next/image';
import { icons } from '../data/icons';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Overview = () => {
    const [languages, setLanguages] = useState(icons);
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <section className={styles.section} ref={ref} id="about">
            <LazyMotion features={domAnimation}>
                <m.div className={styles.container} initial="hidden" animate={isVisible ? "show" : "hidden"} variants={textVariant()}>
                    <h5>Introduction</h5>
                    <h2>Overview</h2>
                    <p>
                        I am a skilled developer with experience in JavaScript, and I have expertise in frameworks <br />
                        such as React, Vue and Node.js. I am a quick learner who adapts to the project and <br />
                        focuses on optimizing it using best practices, all while evolving as a developer in the <br />
                        process.
                    </p>
                    <div className={styles.box_container}>
                        <LazyMotion features={domAnimation}>
                            {
                                languages.map((language, index) => (
                                    <m.div
                                        initial="hidden"
                                        animate={isVisible ? "show" : "hidden"}
                                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                                        className={styles.box}
                                        key={language.nombre}
                                    >
                                        <Image src={language.path} width={150} height={150} alt={language.nombre} />
                                        <p>{language.nombre}</p>
                                    </m.div>
                                ))
                            }
                        </LazyMotion>
                    </div>
                </m.div>
            </LazyMotion>
        </section>
    );
}

export default Overview;
