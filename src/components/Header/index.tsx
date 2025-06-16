'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { ThemeToggle } from './components/ThemeToggle';
import { Logo } from './components/Logo';
import { CustomButton } from '@/shared/components';

import s from './index.module.scss';

export const Header = () => {
    const { data: session } = useSession();

    return (
        <div className={s.header}>
            <Logo />
            <div className={s.header__block}>
                <ThemeToggle />
                <p className={s.header__welcome}>
                    Welcome back,{' '}
                    <span className={s.header__welcome__user}>{session?.user?.name} !</span>
                </p>
                <div className={s.header__shirk} />
                <CustomButton classes={s.header__create}>Create project</CustomButton>
            </div>
        </div>
    );
};
