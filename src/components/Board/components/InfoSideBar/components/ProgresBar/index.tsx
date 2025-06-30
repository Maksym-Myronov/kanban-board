'use client';

import React from 'react';
import { MockStatus } from '@/core/enum/index';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useAppSelector } from '@/hooks/useStore';
import 'react-circular-progressbar/dist/styles.css';

import s from './index.module.scss';

export const ProgressBar = () => {
    const tasks = useAppSelector(state => state.task.tasks);
    const completed = tasks.filter(task => task.status === MockStatus.ThridStatus).length;
    const percentage = (completed / tasks.length) * 100;

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
