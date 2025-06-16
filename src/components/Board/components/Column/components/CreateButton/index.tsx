import React from 'react';
import Image from 'next/image';

import plucIcon from '@/assets/images/plus-icon.svg';

import s from '../../index.module.scss';

interface ButtonProps {
    handleChangeState: () => void;
}

export const CreateButton = ({ handleChangeState }: ButtonProps) => {
    return (
        <button className={s.column__create} onClick={handleChangeState}>
            <Image src={plucIcon} alt="icon" width={16} height={12} />
            <span className={s.column__create__btn}>Create</span>
        </button>
    );
};
