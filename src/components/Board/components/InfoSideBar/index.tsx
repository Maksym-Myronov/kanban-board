import React from 'react';
import { AllTasks, HeaderInfo, ProgressBar } from './components';

import s from './index.module.scss';

export const InfoSideBar = () => {
    return (
        <div className={s.info}>
            <HeaderInfo projectName="Website Redesign" />
            <ProgressBar />
            <AllTasks />
        </div>
    );
};
