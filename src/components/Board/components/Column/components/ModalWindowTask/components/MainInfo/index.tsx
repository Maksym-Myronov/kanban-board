import React from 'react';
import { Activity, MainDescription } from './components/index';

import s from './index.module.scss';

export const MainInfo = () => {
    return (
        <div className={s.main}>
            <MainDescription />
            <Activity />
        </div>
    );
};
