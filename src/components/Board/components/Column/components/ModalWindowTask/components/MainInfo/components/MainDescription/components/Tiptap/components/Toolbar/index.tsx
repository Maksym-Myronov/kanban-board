'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Editor } from '@tiptap/react';
import { Colors, Heading, ToolbarItem } from './components';

import checkboxIcon from '@/assets/images/checkbox.svg';
import boldIcon from '@/assets/images/bold icon.svg';
import italicFont from '@/assets/images/italic.svg';
import textStyle from '@/assets/images/size-text.svg';
import colorsIcon from '@/assets/images/color.svg';
import bulletList from '@/assets/images/list.svg';
import orderedListIcon from '@/assets/images/numberedList.svg';

import s from './index.module.scss';

interface ToolBarProps {
    editor: Editor | null;
}

export const ToolBar = ({ editor }: ToolBarProps) => {
    const [isTextSizeOpen, setIsTextSizeOpen] = useState<boolean>(false);
    const [isColorsOpen, setIsColorsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsTextSizeOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!editor) return null;

    return (
        <div className={s.toolbar}>
            <div className={s.toolbar__select} ref={menuRef}>
                <button className={s.toolbar__btn}>
                    <Image
                        onClick={() => setIsTextSizeOpen(prev => !prev)}
                        src={textStyle}
                        alt="text icons"
                        width={16}
                        height={16}
                    />
                </button>
                {isTextSizeOpen && (
                    <Heading editor={editor} setIsTextSizeOpen={setIsTextSizeOpen} />
                )}
            </div>
            <ToolbarItem
                editor={editor}
                image={boldIcon}
                activeFlag="bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
            />
            <ToolbarItem
                editor={editor}
                image={italicFont}
                activeFlag="italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
            />
            <div className={s.toolbar__color}>
                <button className={s.toolbar__btn}>
                    <Image
                        onClick={() => setIsColorsOpen(prev => !prev)}
                        src={colorsIcon}
                        alt="color icons"
                        width={16}
                        height={16}
                    />
                </button>
                {isColorsOpen && <Colors setIsColorsOpen={setIsColorsOpen} editor={editor} />}
            </div>
            <ToolbarItem
                editor={editor}
                image={bulletList}
                activeFlag="bulletList"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            />
            <ToolbarItem
                editor={editor}
                image={orderedListIcon}
                activeFlag="orderedList"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            />
            <ToolbarItem
                editor={editor}
                image={checkboxIcon}
                activeFlag="taskList"
                onClick={() => editor.chain().focus().toggleTaskList().run()}
            />
        </div>
    );
};
