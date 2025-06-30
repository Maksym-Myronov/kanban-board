'use client';

import React, { useState } from 'react';

import s from './index.module.scss';
import { Tiptap } from '../index';

export const Description = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [text, setText] = useState<string>(
        `Today you have to master the Enzyme and integration testing - check attached Checklist and proceed with themes started from first tab

HOW TO START:

Drag this task to the In Progress column on the Kanban board

HOW TO CHECK YOUR PROGRESS:

When you're started new theme - please, change its status to In Progress

When you're done with the theme - check its checkbox and it will become Completed automatically.

If for some reason you have skipped theme - please, change its status to Skipped

WHAT IF YOU WILL HAVE A QUESTION:

Just post it at comments section mentioned your mentor using AT sign (i.e. @Nick )

WHAT TO DO WHEN ALL THEMES ARE FINISHED:

You have to track the time you have spent on this ticket and move it into Done column of the Canban board
        `,
    );

    const handleBlur = () => {
        setIsEditing(prev => !prev);
    };

    const toHTML = (plainText: string) => {
        return plainText
            .split('\n\n')
            .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br />')}</p>`)
            .join('');
    };

    return (
        <div className={s.description}>
            <h2 className={s.description__title}>Description</h2>
            {isEditing ? (
                <div>
                    <Tiptap content={toHTML(text)} onChange={setText} />
                    <div>
                        <button className={s.description__saveBtn} onClick={handleBlur}>
                            Save
                        </button>
                        <button className={s.description__cancel} onClick={handleBlur}>
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div onClick={handleBlur} className={s.description__text}>
                    {text}
                </div>
            )}
        </div>
    );
};
