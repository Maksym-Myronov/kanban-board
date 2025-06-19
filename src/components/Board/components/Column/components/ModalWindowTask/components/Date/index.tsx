import React from 'react';

import s from './index.module.scss';

export const Date = () => {
    return (
        <div className={s.date}>
            <p className={s.date__created}>Created October 30, 2024 at 2:13 PM</p>
            <p className={s.date__updated}>Updated 5 days ago</p>
        </div>
    );
};
