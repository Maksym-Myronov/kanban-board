import React from 'react';

import s from './index.module.scss';

export const Assigne = () => {
    return (
        <div className={s.assigne}>
            <p className={s.assigne__title}>Assignee</p>
            <p className={s.assigne__name}>Maksym Myronov</p>
        </div>
    );
};
