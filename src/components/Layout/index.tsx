import React, { FC } from 'react';

import styles from './Layout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import vk from '../../assets/svg/vk.svg';
import tg from '../../assets/svg/tg.svg';
import phone from '../../assets/svg/phone.svg';
import mail from '../../assets/svg/mail.svg';

const Layout: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLogo}>
                    <Link to={'/'}>
                        <span>YG-Auto</span>
                    </Link>
                </div>

                <div className={styles.headerMenu}>
                    <span>Домой</span>
                    <span>Про нас</span>
                    <span>Сервисы</span>
                    <span>Контакты</span>
                </div>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                <div className={styles.footerFirst}>
                    <div className={styles.footerLogo}>
                        <span>YG-Auto</span>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoOne}>
                            <span>Очень важная информация</span>
                        </div>
                        <div className={styles.infoTwo}>
                            <span>Информация - важнее некуда</span>
                        </div>
                        <div className={styles.infoThree}>
                            <img src={phone} alt="" />
                            <span>+7 777 707 77 99</span>
                        </div>
                        <div className={styles.infoFour}>
                            <img src={mail} alt="" />
                            <span>Mail</span>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <img className={styles.linksVk} src={vk} alt="ВКонтакте" />
                        <Link to={'https://t.me/n1ckngg'}>
                            <img className={styles.linksTg} src={tg} alt="Телеграм" />
                        </Link>
                        <Link to={'login'}>Посмотреть логин</Link>
                    </div>
                </div>
                <div className={styles.footerSecond}>
                    <span>By Герасименя - Ямало-Ненецкий автономный округ, г. Муравленко</span>
                </div>
            </div>
        </div>
    );
};

export default Layout;
