import React from 'react';

import s from './index.module.scss';

interface ColumnProps {
    title: string;
}

export const Column = ({ title }: ColumnProps) => {
    return (
        <div className={s.column}>
            <h2 className={s.column__title}>{title}</h2>
            <div className={s.column__tasks}>{/* tasks go here */}</div>
        </div>
    );
};
