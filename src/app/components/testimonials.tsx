'use client'
import styles from './../styles/testimonial.module.css';
import { testimonials } from './../data/icons';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../utils/motion';
import { motion } from "framer-motion";
const Testimonials = () => {
    const [testimonial, setTestimonial] = useState(testimonials);
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
            console.log(inView);
        }
    }, [inView]);
    return (
        <section className={styles.section}  id="testimonials">
            <div className={styles.container}>
                <div className={styles.title_info} ref={ref}>
                    <h5>What other say</h5>
                    <h2>Testimonials:</h2>
                </div>
                <div className={styles.testimonial_wrapper}>
                    <div className={styles.testimonial_box} >
                        {
                            testimonial.map((partner, index) => {
                                return (
                                    <motion.div className={styles.testimonial_info} key={`${partner.name} testimonial`}
                                        initial="hidden"
                                        animate={isVisible ? "show" : "hidden"}
                                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
                                        <b>
                                            &apos;&apos;
                                        </b>
                                        <p>
                                            {partner.testimonial}
                                        </p>
                                        <div className={styles.autor_info}>
                                            <div>
                                                <span>
                                                    @{partner.name}
                                                </span>
                                                <br />
                                                <span className={styles.sub_text}>
                                                    {partner.designation}
                                                </span>
                                            </div>
                                            <Image src={partner.image} width={65} height={65} alt={`${partner.name} testimonial`} />
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;