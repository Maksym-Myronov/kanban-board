import React from 'react';
import { WindowHeader, TaskStatus, Details, MainInfo, Automation, Date } from './components/index';

import s from './index.module.scss';

interface ModalWindowProps {
    id: string;
    status: string;
    closeModal: () => void;
}

export const ModalWindowTask = ({ id, status, closeModal }: ModalWindowProps) => {
    return (
        <div className={s.window}>
            <div className={s.window__container}>
                <WindowHeader closeModal={closeModal} />
                <div className={s.window__block}>
                    <MainInfo />
                    <div className={s.window__sideContent}>
                        <TaskStatus status={status} id={id} />
                        <Details />
                        <Automation />
                        <Date />
                    </div>
                </div>
            </div>
        </div>
    );
};
