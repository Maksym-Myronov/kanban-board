import React from 'react';
import type { Editor } from '@tiptap/react';
import Image from 'next/image';

import s from './index.module.scss';

interface ToolbarItemProps {
    editor: Editor | null;
    image: string;
    onClick: () => boolean;
    activeFlag: string;
}

export const ToolbarItem = ({ editor, image, onClick, activeFlag }: ToolbarItemProps) => {
    if (!editor) {
        return null;
    }

    return (
        <button onClick={onClick} className={editor.isActive(activeFlag) ? s.enable : s.disable}>
            <Image src={image} alt="list icon" width={16} height={16} />
        </button>
    );
};
