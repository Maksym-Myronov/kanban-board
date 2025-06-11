'use client';
import React from 'react';
import { Task } from '@/core/types';
import { TaskWidget } from './components';
import { useDroppable } from '@dnd-kit/core';

import s from './index.module.scss';

interface ColumnProps {
    id: string;
    title: string;
    tasks: Task[];
}

export const Column = ({ tasks, id, title }: ColumnProps) => {
    const { setNodeRef } = useDroppable({
        id,
    });
    return (
        <div className={s.column} ref={setNodeRef}>
            <h2 className={s.column__title}>{title}</h2>
            <div className={s.column__tasks}>
                {tasks.map(task => (
                    <TaskWidget key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};
