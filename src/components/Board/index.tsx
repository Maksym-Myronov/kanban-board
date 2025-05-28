import React from 'react';
import { Column } from './components';

import s from './index.module.scss';

export const Board = () => {
    return (
        <div className={s.board}>
            <Column title="To Do" />
            <Column title="In Progress" />
            <Column title="Done" />
        </div>
    );
};
