import { FC, useState } from 'react';

import styles from './Login.module.scss';
import { toast } from 'react-toastify';

import openE from '../../assets/svg/eye-open.svg';
import closeE from '../../assets/svg/eye-closed.svg';

const Login: FC = () => {
    const [form, setForm] = useState({ login: '', password: '' });
    const [visible, setVisible] = useState(false);

    const onSubmit = () => {
        if (!form.login || !form.password) {
            toast.error('Заполните все поля.');
            return;
        }

        if (form.login.length < 2) {
            toast.error('Логин должен содержать минимум 2 символа.');
            return;
        }

        if (form.password.length < 8) {
            toast.error('Пароль должен содержать минимум 8 символов.');
            return;
        }

        toast.success('Вход выполнен успешно!');
    };
    return (
        <div className={styles.formDiv}>
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
                    src={visible ? openE : closeE}
                    onClick={() => setVisible(!visible)}
                    className={styles.eye}
                />
            </div>
            <div className={styles.forgot}>Забыли пароль?</div>
            <div className={styles.submit}>
                <button onClick={onSubmit}>Войти</button>
            </div>
        </div>
    );
};

export default Login;
