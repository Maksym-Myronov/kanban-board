'use client';

import React, { useState } from 'react';
import {
    Assigne,
    Development,
    Labels,
    Parent,
    Releases,
    Reporter,
    Team,
    TimeTracking,
} from './components';

import s from './index.module.scss';

export const Details = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleState = (): void => setIsOpen(prev => !prev);

    return (
        <div className={s.details}>
            <div onClick={toggleState} className={s.details__title}>
                <p>Details</p>
            </div>
            {isOpen && (
                <div className={s.details__container}>
                    <TimeTracking />
                    <Assigne />
                    <Labels />
                    <Parent />
                    <Team />
                    <Development />
                    <Releases />
                    <Reporter />
                </div>
            )}
        </div>
    );
};
