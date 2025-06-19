'use client';

import React, { useEffect, useState } from 'react';

import s from './index.module.scss';

interface TimeProps {
    toggleIsOpen: () => void;
}

export const TimeModalWindow = ({ toggleIsOpen }: TimeProps) => {
    const [time, setTime] = useState<string>('');
    const [remaining, setRemaining] = useState<string>('');
    const [isSaveDisable, setIsSaveDisable] = useState<boolean>(true);

    useEffect(() => {
        const hasInput = time.trim() !== '' || remaining.trim() !== '';
        setIsSaveDisable(!hasInput);
    }, [time, remaining]);

    const handleSaveTime = () => console.log('click');

    return (
        <div className={s.time}>
            <div className={s.time__container}>
                <p>Time tracking</p>
                <div className={s.time__track}>
                    <div>
                        <p className={s.time__text}>Time spent</p>
                        <input className={s.time__input} onChange={e => setTime(e.target.value)} />
                    </div>
                    <div>
                        <p className={s.time__text}>Time remaining</p>
                        <input
                            className={s.time__input}
                            onChange={e => setRemaining(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <p className={s.time__format}>Use the format: 2w 4d 6h 45m</p>
                    <ul className={s.time__format__ul}>
                        <li className={s.time__li}>w = weeks</li>
                        <li className={s.time__li}>d = days</li>
                        <li className={s.time__li}>h = hours</li>
                        <li className={s.time__li}>m = minutes</li>
                    </ul>
                </div>
                <div className={s.time__btns}>
                    <button
                        disabled={isSaveDisable}
                        onClick={handleSaveTime}
                        className={`${s.time__saveBtn} ${!isSaveDisable ? s.time__saveBtn__enabled : ''}`}
                    >
                        Save
                    </button>
                    <button className={s.time__cancel} onClick={toggleIsOpen}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
