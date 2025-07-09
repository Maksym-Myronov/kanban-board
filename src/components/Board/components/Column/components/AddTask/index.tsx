'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MockStatus } from '@/core/enum/index';
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '@/graphql/mutations/tasks/createTask';

import s from '../../index.module.scss';

interface ButtonProps {
    handleChangeState: () => void;
}

export const AddTask = ({ handleChangeState }: ButtonProps) => {
    const [newTitle, setNewTitle] = useState<string>('');
    const [createTask] = useMutation(CREATE_TASK, {
        refetchQueries: ['GetTasks'],
    });

    const handleAddNewTask = (): void => {
        if (!newTitle.trim()) {
            return;
        }

        createTask({
            variables: {
                id: uuidv4(),
                title: newTitle,
                description: '',
                status: MockStatus.FirstStatus,
            },
        });

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
