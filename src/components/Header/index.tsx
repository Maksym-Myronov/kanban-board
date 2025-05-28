'use client';
import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Logo } from './components/Logo';

import s from './index.module.scss';
import { CustomButton } from '@/shared/components';

export const Header = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('user');
        if (storedUserName) {
            try {
                const user = JSON.parse(storedUserName);
                setUserName(user.name);
            } catch (e) {
                console.log('Invalid user in localStorage', e);
            }
        }
    }, []);

    return (
        <div className={s.header}>
            <Logo />
            <div className={s.header__block}>
                <ThemeToggle />
                <p className={s.header__welcome}>
                    Welcome back, <span className={s.header__welcome__user}>{userName} !</span>
                </p>
                <div className={s.header__shirk} />
                <CustomButton classes={s.header__create}>Create project</CustomButton>
            </div>
        </div>
    );
};
