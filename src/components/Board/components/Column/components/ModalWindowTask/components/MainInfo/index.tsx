import React from 'react';
import { Activity, MainDescription } from './components/index';

import s from './index.module.scss';
interface ModalWindowProps {
    id: string;
    description: string;
    title: string;
}

export const MainInfo = ({ id, title, description }: ModalWindowProps) => {
    return (
        <div className={s.main}>
            <MainDescription id={id} description={description} title={title} />
            <Activity />
        </div>
    );
};
