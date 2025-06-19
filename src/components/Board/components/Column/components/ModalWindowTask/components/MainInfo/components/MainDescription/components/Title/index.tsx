import React from 'react';

import s from './index.module.scss';

interface TitleProps {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    return <p className={s.title}>{title}</p>;
};
