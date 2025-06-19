import React from 'react';

import s from './index.module.scss';

export const Releases = () => {
    return (
        <div className={s.releases}>
            <p className={s.releases__title}>Releases</p>
            <p className={s.releases__name}>Add feature flag</p>
        </div>
    );
};
