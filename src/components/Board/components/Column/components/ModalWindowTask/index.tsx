import React from 'react';
import { WindowHeader, TaskStatus } from './components/index';

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
                <TaskStatus status={status} id={id} />
            </div>
        </div>
    );
};
