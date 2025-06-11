import React from 'react';
import { DndBoardClient } from './components';
import { Column as ColumnType } from '@/core/types';

import s from './index.module.scss';

const COLUMNS: ColumnType[] = [
    { id: 'TODO', title: 'To Do' },
    { id: 'IN_PROGRESS', title: 'In Progress' },
    { id: 'DONE', title: 'Done' },
];

export const Board = async () => {
    return (
        <div className={s.board}>
            <DndBoardClient column={COLUMNS} />
        </div>
    );
};
