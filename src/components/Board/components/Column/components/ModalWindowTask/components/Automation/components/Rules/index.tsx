import React from 'react';
import Image from 'next/image';

import refreshIcon from '@/assets/images/refresh.svg';

import s from './index.module.scss';

export const Rules = () => {
    return (
        <div className={s.rules}>
            <div>
                <p className={s.rules__runs}>Recent rule runs</p>
                <p className={s.rules__text}>Refresh to see recent runs.</p>
            </div>
            <button className={s.rules__btn}>
                <Image src={refreshIcon} alt="icon" width={16} height={16} />
                Refresh
            </button>
        </div>
    );
};
