import React from 'react';
import Image from 'next/image';

import clock from '@/assets/images/stopwatch.3d7c91d3.svg';

import s from './index.module.scss';

export const WorkLog = () => {
    return (
        <div className={s.work}>
            <div className={s.work__trackTime}>
                <Image src={clock} alt="watch" width={128} height={160} />
                <p className={s.work__text}>
                    No time has been logged for this work item yet. Logging time lets you track and
                    report on the time spent on work.
                </p>
                <button className={s.work__log}>Log work</button>
            </div>
        </div>
    );
};
