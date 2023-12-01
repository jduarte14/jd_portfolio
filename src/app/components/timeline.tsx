'use client'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'react-vertical-timeline-component/style.min.css';
import styles from './../styles/timeline.module.css';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const SlideInVariants = {
    hiddenLeft: { x: '-100%', opacity: 0 },
    showLeft: { x: 0, opacity: 1, transition: { duration: 0.75, ease: 'easeOut' } },
    hiddenRight: { x: '100%', opacity: 0 },
    showRight: { x: 0, opacity: 1, transition: { duration: 0.75, ease: 'easeOut' } },
};


const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};
const Timeline = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
            console.log(inView,'ref');
        }
    }, [inView]);
    return (
        <section className={styles.section}  id='work'>
            <div className={styles.title_info}  ref={ref}> 
                <h5>What i have done so far</h5>
                <h2>Work Experience.</h2>
            </div>
          
            <VerticalTimeline >
                <div className={styles.relative} ref={ref}>
                    <motion.div className={styles.timeline_icon} animate={isVisible ? 'visible' : 'hidden'}
                        variants={iconVariants}>
                        <Image src='/icons/fenicio.png' width={60} height={60} alt='Fenicio work experience' />
                    </motion.div>
                    <motion.aside initial='hiddenLeft' animate={isVisible ? 'showLeft' : ''} variants={SlideInVariants} className={styles.timeline_box}>
                        <div className={styles.timeline_info}>
                            <h3>Front end developer (Vue, React, Javascript)</h3>
                            <p> Fenicio </p>
                            <ul>
                                <li>I used to create templates for new e-commerce websites,
                                    and I was also responsible for maintaining and providing site support.</li>
                            </ul>
                            <ul>
                                <li>At that time,
                                    I specialized in two departments: Kick-off,
                                    where the projects began, and Customer Support,
                                    where we ensured the aesthetics and operation of the site,
                                    as well as addressing all of the clients needs and requests.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    I also worked on creating new features for the sites,
                                    evaluating if they were feasible within the platform and determining how to optimize the code.
                                </li>
                            </ul>
                        </div>
                    </motion.aside>
                </div>
                <div className={styles.box_right} >
                    <motion.div className={styles.timeline_icon_right} animate={isVisible ? 'visible' : 'hidden'}
                        variants={iconVariants}>
                        <Image src='/icons/flow.jpg' width={60} height={60} alt='FlowLabs work experience' />
                    </motion.div>
                    <motion.aside initial='hiddenRight' animate={isVisible ? 'showRight' : ''} variants={SlideInVariants} className={styles.timeline_box_right}>
                        <div className={styles.timeline_info}>
                            <h3>Front end developer (Vue, React, React native)</h3>
                            <p> FlowLabs </p>
                            <ul>
                                <li>
                                    I used to specialize in setting up templates for e-commerce websites,
                                    utilizing technologies such as Vue.js for
                                    front-end development and Laravel for back-end development.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    In addition, I have experience working with SQL databases to manage data.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    Once the websites were launched, I would transition into maintaining and managing them.
                                </li>
                            </ul>
                        </div>
                    </motion.aside>
                </div>
                <div className={styles.relative}>
                    <motion.div className={styles.timeline_icon} animate={isVisible ? 'visible' : 'hidden'}
                        variants={iconVariants}>
                        <Image src='/icons/jd.svg' width={60} height={60} alt='Fenicio work experience' />
                    </motion.div>
                    <motion.aside initial='hiddenLeft' animate={isVisible ? 'showLeft' : ''} variants={SlideInVariants} className={styles.timeline_box}>
                        <div className={styles.timeline_info}>
                            <h3>Front end Developer (Vue, React, Javascript, Node, React Native, MongoDB)</h3>
                            <p> Freelance </p>
                            <ul>
                                <li>I worked as a freelance web developer, creating websites for e-commerce businesses specializing in home furniture and roof construction.</li>
                            </ul>
                            <ul>
                                <li>
                                    In addition, I was involved in developing a website for a makeup academy, where I not only created the site but also provided ongoing support for it.
                                </li>
                            </ul>
                        </div>
                    </motion.aside>
                </div>
            </VerticalTimeline>
        </section>
    )
}

export default Timeline;
