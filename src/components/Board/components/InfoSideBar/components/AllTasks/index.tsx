'use client';

import React from 'react';
import { TaskWidget } from './components/TaskWidget';
import { MockStatus } from '@/core/enum';
import { useQuery } from '@apollo/client';
import { GET_TASKS } from '@/graphql/queries/tasks';
import { GetTasksResponse } from '../../../DndBoardClient';

import s from './index.module.scss';

export const AllTasks = () => {
    const { data, loading, error } = useQuery<GetTasksResponse>(GET_TASKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    if (!data) return null;

    const totalLength = String(data.tasks.length);
    const inProgressLength = String(
        data.tasks.filter(item => item.status === MockStatus.SecondStatus).length,
    );
    const toDoLength = String(
        data.tasks.filter(item => item.status === MockStatus.FirstStatus).length,
    );
    const completedTaskLength = String(
        data.tasks.filter(item => item.status === MockStatus.ThridStatus).length,
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
