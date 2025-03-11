import React, { FC } from 'react';

import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

type CardProps = {
    id: number;
    title: string;
    img: any;
    description: string;
};
const Card: FC<CardProps> = ({ id, title, img, description }) => {
    return (
        <Link to={`card/:${id}`} state={{ id, title, img, description }} className={styles.card}>
            <div className={styles.header}>
                <span>{title}</span>
            </div>
            <div className={styles.img}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.cardBody}>
                <span>{description}</span>
            </div>
        </Link>
    );
};

export default Card;
