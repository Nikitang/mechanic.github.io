import { FC, useState } from 'react';

import car from '../../assets/svg/car2.svg';
import pickUp from '../../assets/svg/pick-up.svg';
import jeep from '../../assets/svg/jeep.svg';
import styles from './HomePage.module.scss';
import Card from '../../components/Card';

import { arrayData } from '../../utils/static';
import Dot from '../../components/Dot';
import ImgSlider from '../../components/ImgSlider';

// const stylesArray = [
//     styles.dotWheel,
//     styles.dotDoor,
//     styles.dotHood,
//     styles.dotLamp,
//     styles.dotExhaust,
//     styles.dotGlass,
// ];

const imgArr = [
    { name: 'Седан', img: car },
    { name: 'Пикап', img: pickUp },
    { name: 'Джип', img: jeep },
];

const HomePage: FC = () => {
    const [title, setTitle] = useState(imgArr[0]);

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1>{title.name}</h1>
            </div>
            <div className={styles.logo}>
                <ImgSlider images={imgArr} titleSet={setTitle} />
                {/* <img src={car} alt="Автомобиль" /> */}
                {/* 
                {stylesArray.map((item) => (
                    <Dot dotStyle={item} />
                ))} */}
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
