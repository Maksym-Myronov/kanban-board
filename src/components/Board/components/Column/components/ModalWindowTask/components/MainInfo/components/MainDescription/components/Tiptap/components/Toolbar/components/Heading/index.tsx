import React from 'react';
import type { Level } from '@tiptap/extension-heading';
import type { Editor } from '@tiptap/react';

import s from '../../index.module.scss';

interface HeadingProps {
    editor: Editor | null;
    setIsTextSizeOpen: (value: boolean) => void;
}

export const Heading = ({ editor, setIsTextSizeOpen }: HeadingProps) => {
    if (!editor) {
        return null;
    }

    const handleHeadingClick = (headingLvl: Level): boolean => {
        setIsTextSizeOpen(false);
        return editor.chain().focus().toggleHeading({ level: headingLvl }).run();
    };

    const handleNormalTextClick = (): boolean => {
        setIsTextSizeOpen(false);
        return editor.chain().focus().setParagraph().run();
    };

    return (
        <div className={s.toolbar__heading}>
            <button className={s.toolbar__heading__btn} onClick={handleNormalTextClick}>
                <p>Normal text</p>
            </button>
            <button className={s.toolbar__heading__btn} onClick={() => handleHeadingClick(1)}>
                <h1>Heading 1</h1>
            </button>
            <button className={s.toolbar__heading__btn} onClick={() => handleHeadingClick(2)}>
                <h2>Heading 2</h2>
            </button>
            <button className={s.toolbar__heading__btn} onClick={() => handleHeadingClick(3)}>
                <h3>Heading 3</h3>
            </button>
            <button className={s.toolbar__heading__btn} onClick={() => handleHeadingClick(4)}>
                <h4>Heading 4</h4>
            </button>
            <button className={s.toolbar__heading__btn} onClick={() => handleHeadingClick(5)}>
                <h5>Heading 5</h5>
            </button>
            <button className={s.toolbar__heading__btn} onClick={() => handleHeadingClick(6)}>
                <h6>Heading 6</h6>
            </button>
        </div>
    );
};
