'use client';

import { Editor, EditorContent } from '@tiptap/react';
import { ToolBar } from './components';

import s from './index.module.scss';

export const Tiptap = ({ editor }: { editor: Editor | null }) => {
    if (!editor) return null;

    return (
        <div className={s.tiptap}>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} className={s.tiptap__editor} />
        </div>
    );
};
