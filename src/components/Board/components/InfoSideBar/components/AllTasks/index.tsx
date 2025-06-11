'use client';

import React from 'react';
import { TaskWidget } from './components/TaskWidget';
import { MockStatus } from '@/core/enum';
import { useAppSelector } from '@/hooks/useStore';

import s from './index.module.scss';

export const AllTasks = () => {
    const task = useAppSelector(arr => arr.task.tasks);
    const totalLength = String(task.length);
    const inProgressLength = String(
        task.filter(item => item.status === MockStatus.SecondStatus).length,
    );
    const toDoLength = String(task.filter(item => item.status === MockStatus.FirstStatus).length);
    const completedTaskLength = String(
        task.filter(item => item.status === MockStatus.ThridStatus).length,
    );

    return (
        <div className={s.task}>
            <p>Tasks</p>
            <div className={s.task__widgets}>
                <TaskWidget title="TOTAL" total={totalLength} />
                <TaskWidget title="IN PROGRESS" total={inProgressLength} />
                <TaskWidget title="WAITING" total={toDoLength} />
                <TaskWidget title="COMPLETED" total={completedTaskLength} />
            </div>
        </div>
    );
};
