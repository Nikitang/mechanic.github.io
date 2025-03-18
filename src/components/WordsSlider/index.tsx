import React, { FC } from 'react';

import styles from './WordsSlider.module.scss';

const WordsSlider: FC = () => {
    return (
        <div className={styles.slider}>
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
