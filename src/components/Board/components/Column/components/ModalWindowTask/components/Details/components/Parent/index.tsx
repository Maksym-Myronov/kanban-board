import React from 'react';

import s from './index.module.scss';

export const Parent = () => {
    return (
        <div className={s.parent}>
            <p className={s.parent__title}>Parent</p>
            <p className={s.parent__name}>None</p>
        </div>
    );
};
