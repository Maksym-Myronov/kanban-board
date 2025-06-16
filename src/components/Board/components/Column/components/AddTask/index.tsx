'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/hooks/useStore';
import { createNewTask } from '@/store/mockDataSlice';
import { v4 as uuidv4 } from 'uuid';
import { MockStatus } from '@/core/enum/index';

import s from '../../index.module.scss';

interface ButtonProps {
    handleChangeState: () => void;
}

export const AddTask = ({ handleChangeState }: ButtonProps) => {
    const [newTitle, setNewTitle] = useState<string>('');
    const dispatch = useAppDispatch();
    const handleAddNewTask = (): void => {
        if (!newTitle.trim()) {
            return;
        }

        dispatch(
            createNewTask({
                id: uuidv4(),
                title: newTitle,
                status: MockStatus.FirstStatus,
                description: '',
            }),
        );

        handleChangeState();
        setNewTitle('');
    };

    return (
        <div className={s.column__add}>
            <textarea
                placeholder="Write title for new task"
                className={s.column__add__input}
                value={newTitle}
                onChange={e => setNewTitle(String(e.target.value))}
            />
            <button className={s.column__add__btn} onClick={handleAddNewTask}>
                Add new task
            </button>
            <button className={s.column__add__close} onClick={handleChangeState}>
                Close
            </button>
        </div>
    );
};
