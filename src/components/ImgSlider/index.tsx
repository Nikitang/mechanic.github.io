import { FC, useEffect, useState } from 'react';

import styles from './ImgSlider.module.scss';

import arrow from '../../assets/svg/arrow-left.svg';

type ObjImg = {
    name: string;
    img: string;
};

type ImagesProps = {
    images: Array<ObjImg>;
    titleSet: (arg: ObjImg) => any;
};

const ImgSlider: FC<ImagesProps> = ({ images, titleSet }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        titleSet(images[currentIndex]);
    }, [currentIndex]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.slider}>
            <div onClick={goToPrevious} className={styles.buttonL}>
                <img src={arrow} alt="" />
            </div>
            <img
                src={images[currentIndex].img}
                alt={`Slide ${currentIndex}`}
                className={styles.image}
            />
            <div onClick={goToNext} className={styles.buttonR}>
                <img src={arrow} alt="" />
            </div>
        </div>
    );
};

export default ImgSlider;
