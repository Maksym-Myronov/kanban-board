import React from 'react';
import Image from 'next/image';

import gitBrach from '@/assets/images/git.png';

import s from './index.module.scss';
import Link from 'next/link';

export const Logo: React.FC = () => {
    return (
        <div className={s.logo}>
            <Link className={s.logo__link} href="/">
                <Image src={gitBrach} alt="git icon" width={18} height={18} />
            </Link>
            <p className={s.logo__name}>
                <span className={s.logo__name__span}>Pro</span> KanBan
            </p>
        </div>
    );
};
