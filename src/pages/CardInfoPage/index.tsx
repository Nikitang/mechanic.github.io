import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './CardInfoPage.module.scss';

const CardInfoPage: FC = () => {
    const location = useLocation();
    const linkState = location.state;
    return (
        <div className={styles.cardInfo}>
            <div className={styles.title}>
                <h1>{linkState.title}</h1>
            </div>
            <div className={styles.logo}>
                <img src={linkState.img} alt="" />
            </div>
            <div className={styles.description}>
                <span>{linkState.description}</span>
            </div>
        </div>
    );
};

export default CardInfoPage;
