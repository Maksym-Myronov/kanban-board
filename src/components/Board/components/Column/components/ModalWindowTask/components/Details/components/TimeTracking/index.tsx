'use client';

import React, { useState } from 'react';
import { TimeModalWindow } from './components';

import s from './index.module.scss';

export const TimeTracking = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpen = (): void => setIsOpen(prev => !prev);

    return (
        <div className={s.time}>
            <p className={s.time__title}>Time tracking</p>
            <div className={s.time__btn}>
                <button onClick={toggleIsOpen}>No time logged</button>
            </div>
            <div>{isOpen && <TimeModalWindow toggleIsOpen={toggleIsOpen} />}</div>
        </div>
    );
};
