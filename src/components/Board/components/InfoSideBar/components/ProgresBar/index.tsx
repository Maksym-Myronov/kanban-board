'use client';

import React from 'react';
import { MockStatus } from '@/core/enum/index';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useQuery } from '@apollo/client';
import { GetTasksResponse } from '../../../DndBoardClient';
import { GET_TASKS } from '@/graphql/queries/tasks';

import s from './index.module.scss';

export const ProgressBar = () => {
    const { data, loading, error } = useQuery<GetTasksResponse>(GET_TASKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    if (!data) return null;

    const completed = data.tasks.filter(task => task.status === MockStatus.ThridStatus).length;
    const percentage = (completed / data?.tasks?.length) * 100;

    return (
        <div className={s.progress}>
            <div className={s.progress__container}>
                <CircularProgressbar
                    value={percentage}
                    text={`${Math.round(percentage)}%`}
                    styles={buildStyles({
                        pathColor: `#00b894`,
                        textColor: 'currentColor',
                        trailColor: '#dfe6e9',
                    })}
                />
            </div>
        </div>
    );
};
