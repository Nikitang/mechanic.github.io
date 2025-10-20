import { LoginFormType } from '../types';

import { toast } from 'react-toastify';

const validationForm = (form: LoginFormType) => {
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

export default validationForm;
