import React from 'react';
import Image from 'next/image';

import cross from '@/assets/images/cross.svg';

import s from './index.module.scss';

interface ModalWindowProps {
    closeModal: () => void;
}

export const WindowHeader = ({ closeModal }: ModalWindowProps) => {
    return (
        <div className={s.window}>
            <button onClick={closeModal} className={s.window__close}>
                <Image src={cross} alt="cross icon" width={20} height={20} />
            </button>
        </div>
    );
};
