'use client';

import React, { useState } from 'react';
import { Task } from '@/core/types';
import { CreateButton, TaskWidget, AddTask } from './components';
import { useDroppable } from '@dnd-kit/core';
import { MockStatus } from '@/core/enum/index';

import s from './index.module.scss';

interface ColumnProps {
    id: string;
    title: string;
    tasks: Task[];
}

export const Column = ({ tasks, id, title }: ColumnProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { setNodeRef } = useDroppable({
        id,
    });

    const handleChangeState = (): void => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className={s.column} ref={setNodeRef}>
            <h2 className={s.column__title}>{title}</h2>
            <div className={s.column__tasks}>
                {tasks.map(task => (
                    <TaskWidget key={task.id} task={task} />
                ))}
            </div>
            {!isOpen && id === MockStatus.FirstStatus && (
                <CreateButton handleChangeState={handleChangeState} />
            )}
            {isOpen && <AddTask handleChangeState={handleChangeState} />}
        </div>
    );
};
