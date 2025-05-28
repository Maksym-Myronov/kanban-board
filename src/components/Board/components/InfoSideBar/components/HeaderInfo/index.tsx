import React from 'react';
import Image from 'next/image';

import taskIcon from '@/assets/images/checklist.png';

import s from './index.module.scss';

interface HeaderProps {
    projectName: string;
}

export const HeaderInfo = ({ projectName }: HeaderProps) => {
    return (
        <div className={s.header}>
            <div>
                <p className={s.header__project}>PROJECT</p>
                <p className={s.header__project__name}>{projectName}</p>
            </div>
            <div>
                <Image src={taskIcon} alt="task icon" width={40} height={40} />
            </div>
        </div>
    );
};
