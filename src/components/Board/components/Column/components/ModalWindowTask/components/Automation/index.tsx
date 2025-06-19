'use client';

import React, { useState } from 'react';
import { Rules } from './components';

import s from './index.module.scss';

export const Automation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpenState = (): void => setIsOpen(prev => !prev);

    return (
        <div className={s.automation}>
            <div onClick={toggleIsOpenState}>
                <p className={s.automation__title}>Automation</p>
            </div>
            {isOpen && <Rules />}
        </div>
    );
};
