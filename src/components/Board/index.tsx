import React from 'react';
import { DndBoardClient } from './components';
import { Column as ColumnType } from '@/core/types';
import { MockStatus } from '@/core/enum/index';

import s from './index.module.scss';

export const COLUMNS: ColumnType[] = [
    { id: MockStatus.FirstStatus, title: 'To Do' },
    { id: MockStatus.SecondStatus, title: 'In Progress' },
    { id: MockStatus.ThridStatus, title: 'Done' },
];

export const Board = async () => {
    return (
        <div className={s.board}>
            <DndBoardClient column={COLUMNS} />
        </div>
    );
};
