import { FC, useState } from 'react';

import styles from './HomePage.module.scss';
import Card from '../../components/Card';

import { arrayData } from '../../utils/static';
import ImgSlider from '../../components/ImgSlider';
import WordsSlider from '../../components/WordsSlider';

import { imgArr } from '../../utils/static';

const HomePage: FC = () => {
    const [title, setTitle] = useState(imgArr[0]);

    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <ImgSlider images={imgArr} titleSet={setTitle} />
            </div>
            <div className={styles.wordSlider}>
                <WordsSlider />
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
