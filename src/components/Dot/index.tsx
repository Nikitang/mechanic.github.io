import { FC } from 'react';
import styles from './Dot.module.scss';

type DotProps = {
    mainStyles?: string;
    dotStyle: string;
};

const Dot: FC<DotProps> = ({ dotStyle }) => {
    return (
        <div className={`${styles.container} ${dotStyle}`}>
            <div className={styles.button}></div>
            <div className={styles.tooltip}>
                <div className={styles.popup}>Это окно с подсказкой!</div>
            </div>
        </div>
    );
};

export default Dot;
