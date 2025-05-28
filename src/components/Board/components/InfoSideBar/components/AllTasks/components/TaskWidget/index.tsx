import React from 'react';

import s from './index.module.scss';

interface TaskProps {
    title: string;
    total: string;
}

export const TaskWidget = ({ title, total }: TaskProps) => {
    return (
        <div className={s.widget}>
            <p className={s.widget__title}>{title}</p>
            <div className={s.widget__block}>
                <div className={s.widget__line} />
                <p className={s.widget__total}>{total}</p>
            </div>
        </div>
    );
};
