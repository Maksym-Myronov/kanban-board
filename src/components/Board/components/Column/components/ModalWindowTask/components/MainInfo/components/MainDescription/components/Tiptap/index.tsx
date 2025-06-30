'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Heading from '@tiptap/extension-heading';
import TaskItem from '@tiptap/extension-task-item';
import OrderedList from '@tiptap/extension-ordered-list';
import TaskList from '@tiptap/extension-task-list';
import { ToolBar } from './components';

import s from './index.module.scss';

export const Tiptap = ({
    content,
    onChange,
}: {
    content: string;
    onChange: (html: string) => void;
}) => {
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
        content,
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    return (
        <div className={s.tiptap}>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} className={s.tiptap__editor} />
        </div>
    );
};
