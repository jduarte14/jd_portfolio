"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './../styles/overlay.module.css';

const Overlay = () => {
    const barsRefs = useRef<HTMLDivElement[]>([]);

    const animateBars = () => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        barsRefs.current.forEach((barRef, index) => {
            tl.to(barRef, { height: '0%', duration: 0.5, delay: index * 0.1, pointerEvents:'none', });
        });
    };

    useEffect(() => {
        animateBars();
    }, []);

    return (
        <aside className={styles.container}>
            <div ref={(el) => (barsRefs.current[0] = el)} className={styles.bar} />
            <div ref={(el) => (barsRefs.current[1] = el)} className={styles.bar} />
            <div ref={(el) => (barsRefs.current[2] = el)} className={styles.bar} />
            <div ref={(el) => (barsRefs.current[3] = el)} className={styles.bar} />

        </aside>
    );
};

export default Overlay;
