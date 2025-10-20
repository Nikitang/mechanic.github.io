import React, { FC, useEffect, useRef } from 'react';

import styles from './WordsSlider.module.scss';

const WordsSlider: FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        };

        slider.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            slider.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div ref={sliderRef} className={styles.slider}>
            <div className={styles.word}>Двигатель</div>
            <div className={styles.word}>Трансмиссия</div>
            <div className={styles.word}>Электроника</div>
            <div className={styles.word}>Тормозные системы</div>
            <div className={styles.word}>Кузов</div>
            <div className={styles.word}>Турбонаддув</div>
            <div className={styles.word}>Системы охлаждения</div>
        </div>
    );
};

export default WordsSlider;
