import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

import profileImage from '@/assets/images/icons8-user-32.png';

import s from './index.module.scss';

export const Header = () => {
    return (
        <div className={s.header}>
            <ThemeToggle />
            <Link href="/">
                <Image src={profileImage} alt="profile icon" width={32} height={32} />
            </Link>
        </div>
    );
};
