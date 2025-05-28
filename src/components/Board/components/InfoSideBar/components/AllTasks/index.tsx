import React from 'react';

import s from './index.module.scss';
import { TaskWidget } from './components/TaskWidget';

export const AllTasks = () => {
    return (
        <div className={s.task}>
            <p>Tasks</p>
            <div className={s.task__widgets}>
                <TaskWidget title="TOTAL" total="10" />
                <TaskWidget title="IN PROGRESS" total="4" />
                <TaskWidget title="WAITING" total="5" />
                <TaskWidget title="COMPLETED" total="1" />
            </div>
        </div>
    );
};
