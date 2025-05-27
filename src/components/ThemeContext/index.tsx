'use client';

import React, { useEffect, useState, createContext } from 'react';
import { ThemeColors, Attributes } from '@/core/enum/index';

type ThemeColor = ThemeColors.Light | ThemeColors.Dark;

type ThemeChildren = { children: React.ReactNode; initialTheme: ThemeColor };

interface ThemeContextProps {
    theme: ThemeColor;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children, initialTheme }: ThemeChildren) => {
    const [theme, setTheme] = useState<ThemeColor>(initialTheme);

    useEffect(() => {
        document.documentElement.setAttribute(Attributes.DataTheme, theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === ThemeColors.Light ? ThemeColors.Dark : ThemeColors.Light;
        setTheme(newTheme);
        document.documentElement.setAttribute(Attributes.DataTheme, newTheme);
        document.cookie = `${Attributes.Theme}=${newTheme}; path=/; max-age=31536000`;
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
