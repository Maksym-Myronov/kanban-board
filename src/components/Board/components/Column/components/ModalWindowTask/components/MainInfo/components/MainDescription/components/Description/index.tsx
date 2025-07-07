'use client';

import React, { useState } from 'react';
import { Tiptap } from '../index';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Heading from '@tiptap/extension-heading';
import TaskItem from '@tiptap/extension-task-item';
import OrderedList from '@tiptap/extension-ordered-list';
import TaskList from '@tiptap/extension-task-list';
import { useAppDispatch } from '@/hooks/useStore';
import { updateDescription } from '@/store/mockDataSlice';
import { CustomButton } from '@/shared/components';

import s from './index.module.scss';

interface ModalWindowProps {
    id: string;
    description: string;
}

export const Description = ({ id, description }: ModalWindowProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const isContentEmpty = !description || description.replace(/<[^>]*>?/gm, '').trim() === '';
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: false,
                listItem: false,
            }),
            TextStyle,
            Color,
            BulletList,
            ListItem,
            TaskList,
            OrderedList,
            TaskItem.configure({
                nested: true,
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
            }),
            Heading.configure({
                levels: [1, 2, 3, 4, 5, 6],
            }),
        ],
        content: description,
    });

    const handleBlur = () => {
        setIsEditing(prev => !prev);
    };

    const updateText = (): void => {
        if (editor) {
            const text = editor.getHTML();

            dispatch(updateDescription({ id, description: text }));
        }

        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        if (editor) {
            editor.commands.setContent(description);
        }
    };

    return (
        <div className={s.description}>
            <h2 className={s.description__title}>Description</h2>
            {isEditing && editor ? (
                <div>
                    <Tiptap editor={editor} />
                    <div>
                        <CustomButton classes={s.description__saveBtn} handleClick={updateText}>
                            Save
                        </CustomButton>
                        <CustomButton classes={s.description__cancel} handleClick={handleCancel}>
                            Cancel
                        </CustomButton>
                    </div>
                </div>
            ) : isContentEmpty ? (
                <div onClick={handleBlur} className={s.description__text}>
                    <p>Click to add a description...</p>
                </div>
            ) : (
                <div
                    onClick={handleBlur}
                    className={s.description__text}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </div>
    );
};
