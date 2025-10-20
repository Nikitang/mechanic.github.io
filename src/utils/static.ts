import engine from '../assets/svg/engine.svg';
import window from '../assets/svg/window-car.svg';
import exhaust from '../assets/svg/exhaust.svg';
import headlights from '../assets/svg/headlights.svg';
import paintbrush from '../assets/svg/paintbrush.svg';
import disc from '../assets/svg/disc-brake.svg';

import car from '../assets/svg/car2.svg';
import pickUp from '../assets/svg/pick-up.svg';
import jeep from '../assets/svg/jeep.svg';

export const arrayData = [
    {
        id: 1,
        title: 'Двигатель',
        img: engine,
        description: 'Описание',
    },
    {
        id: 2,
        title: 'Тормозная система',
        img: disc,
        description: 'Описание',
    },
    { id: 3, title: 'Выхлоп', img: exhaust, description: 'Описание' },
    { id: 4, title: 'Салон', img: window, description: 'Описание' },
    { id: 5, title: 'Освещение', img: headlights, description: 'Описание' },
    { id: 6, title: 'Детейлинг', img: paintbrush, description: 'Описание' },
];

export const imgArr = [
    { name: 'Седан', img: car },
    { name: 'Пикап', img: pickUp },
    { name: 'Джип', img: jeep },
];
