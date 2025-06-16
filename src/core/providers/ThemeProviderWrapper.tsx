import { ThemeColors, Attributes } from '@/core/enum/index';
import { cookies } from 'next/headers';
import { ThemeProvider } from './ThemeContext';

type Props = { children: React.ReactNode };

export const ThemeProviderWrapper = async ({ children }: Props) => {
    const cookieStore = await cookies();
    const themeCookie = cookieStore.get(Attributes.Theme);

    const themeValue =
        themeCookie?.value === ThemeColors.Dark ? ThemeColors.Dark : ThemeColors.Light;

    if (typeof document !== 'undefined') {
        document.documentElement.setAttribute(Attributes.DataTheme, themeValue);
    }

    return <ThemeProvider initialTheme={themeValue}>{children}</ThemeProvider>;
};
