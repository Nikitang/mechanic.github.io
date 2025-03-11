import { FC } from 'react';

import car from '../../assets/svg/car2.svg';
import styles from './HomePage.module.scss';
import Card from '../../components/Card';

import { arrayData } from '../../utils/static';
import Dot from '../../components/Dot';

const stylesArray = [
    styles.dotWheel,
    styles.dotDoor,
    styles.dotHood,
    styles.dotLamp,
    styles.dotExhaust,
    styles.dotGlass,
];

const HomePage: FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>Обзор</h1>
            </div>
            <div className={styles.logo}>
                <img src={car} alt="Автомобиль" />

                {stylesArray.map((item) => (
                    <Dot dotStyle={item} />
                ))}
                {/* <div className={`${styles.dots} ${styles.dotWheel}`}></div>
                <div className={`${styles.dots} ${styles.dotDoor}`}></div>
                <div className={`${styles.dots} ${styles.dotHood}`}></div>
                <div className={`${styles.dots} ${styles.dotLamp}`}></div>
                <div className={`${styles.dots} ${styles.dotExhaust}`}></div>
                <div className={`${styles.dots} ${styles.dotGlass}`}></div> */}
            </div>
            <div className={styles.cards}>
                {arrayData.map((item, i) => (
                    <Card key={i} {...item} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
