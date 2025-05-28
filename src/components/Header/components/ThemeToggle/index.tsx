'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ThemeColors } from '@/core/enum';
import Image from 'next/image';

import sunImage from '@/assets/images/sun.png';
import cloudImage from '@/assets/images/sleep-mode.png';

import s from './index.module.scss';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={`${s['theme-toggle']} ${s[`theme-toggle--${theme}`]}`}
            onClick={toggleTheme}
        >
            {theme === ThemeColors.Dark ? (
                <Image src={cloudImage} alt="theme cloud icon" width={16} height={16} />
            ) : (
                <Image src={sunImage} alt="theme sun icon" width={16} height={16} />
            )}
        </button>
    );
};
