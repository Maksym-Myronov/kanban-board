import React from 'react';

import s from './index.module.scss';

export const Development = () => {
    return (
        <div className={s.development}>
            <p className={s.development__title}>Development</p>
            <div className={s.development__block}>
                <p className={s.development__name}>Open with VS Code</p>
                <p className={s.development__name}>Create branch</p>
                <p className={s.development__name}>Create commit</p>
            </div>
        </div>
    );
};
