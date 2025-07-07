'use client';

import React, { ChangeEvent, useState } from 'react';
import { CustomButton } from '@/shared/components';

import s from './index.module.scss';

export const Comments = () => {
    const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const toggleShowState = (): void => setIsInputVisible(prev => !prev);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setInputValue(String(e.target.value));
    };

    return (
        <div className={s.comments}>
            {!isInputVisible && (
                <div className={s.comments__block} onClick={toggleShowState}>
                    <p>Add a comment...</p>
                </div>
            )}
            {isInputVisible && (
                <>
                    <div className={s.comments__open}>
                        <textarea
                            placeholder="Type @ to mention and notify someone"
                            value={inputValue}
                            onChange={handleInputChange}
                            className={s.comments__textarea}
                        />
                    </div>
                    <div className={s.comments__btns}>
                        <CustomButton classes={s.comments__saveBtn}>Save</CustomButton>
                        <CustomButton classes={s.comments__cancel} handleClick={toggleShowState}>
                            Cancel
                        </CustomButton>
                    </div>
                </>
            )}
        </div>
    );
};
