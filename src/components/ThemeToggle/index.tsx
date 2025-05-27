'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';

import s from './index.module.scss';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={`${s['theme-toggle']} ${s[`theme-toggle--${theme}`]}`}
            onClick={toggleTheme}
        >
            Toggle theme: {theme}
        </button>
    );
};
