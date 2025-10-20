import { FC, useState } from 'react';

import styles from './Login.module.scss';

import openEye from '../../../../assets/svg/eye-open.svg';
import closeEye from '../../../../assets/svg/eye-closed.svg';

import validationForm from '../../helpers/validationForm';

export const Login: FC = () => {
    const [form, setForm] = useState({ login: '', password: '' });
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.formDiv}>
            <div className={styles.loginLogo}>
                <span>YG-auto</span>
            </div>
            <div className={styles.title}>Вход</div>
            <div className={styles.loginDiv}>
                <p>Логин</p>
                <input
                    type="text"
                    value={form.login}
                    onChange={(event) => setForm({ ...form, login: event.target.value })}
                    maxLength={30}
                />
            </div>
            <div className={styles.passwordDiv}>
                <p>Пароль</p>
                <input
                    type={visible ? 'text' : 'password'}
                    value={form.password}
                    onChange={(event) => setForm({ ...form, password: event.target.value })}
                    maxLength={30}
                />
                <img
                    src={visible ? openEye : closeEye}
                    onClick={() => setVisible(!visible)}
                    className={styles.eye}
                />
            </div>
            <div className={styles.forgot}>Забыли пароль?</div>
            <div className={styles.submit}>
                <button onClick={() => validationForm(form)}>Войти</button>
            </div>
        </div>
    );
};
