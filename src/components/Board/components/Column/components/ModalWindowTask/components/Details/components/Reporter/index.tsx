import React from 'react';

import s from './index.module.scss';

export const Reporter = () => {
    return (
        <div className={s.reporter}>
            <p className={s.reporter__title}>Reporter</p>
            <p className={s.reporter__name}>Maksym Myronov</p>
        </div>
    );
};
