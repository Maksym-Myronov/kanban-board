'use client';

import React, { useState } from 'react';
import { tabData } from '@/core/constants/index';
import { TabData } from '@/core/enum';
import { All, Checklist, Comments, History, WorkLog } from './components';

import s from './index.module.scss';

export const Activity = () => {
    const [activeTab, setActiveTab] = useState<string>(TabData.Comments);

    const handleChangeActiveTab = (value: string): void => setActiveTab(value);

    return (
        <div className={s.activity}>
            <p className={s.activity__title}>Activity</p>
            <div className={s.activity__block}>
                {tabData.map(item => (
                    <button
                        key={item}
                        onClick={() => handleChangeActiveTab(item)}
                        className={activeTab === item ? s.activity__active : s.activity__btns}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div>
                {activeTab === TabData.All && <All />}
                {activeTab === TabData.Comments && <Comments />}
                {activeTab === TabData.History && <History />}
                {activeTab === TabData.Work && <WorkLog />}
                {activeTab === TabData.Checklist && <Checklist />}
            </div>
        </div>
    );
};
