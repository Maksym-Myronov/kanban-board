'use client';

import React, { useEffect, useRef, useState } from 'react';

import s from './index.module.scss';

export const Description = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [text, setText] = useState<string>(
        `Today you have to master the Enzyme and integration testing - check attached Checklist and proceed with themes started from first tab

HOW TO START:

Drag this task to the In Progress column on the Kanban board

HOW TO CHECK YOUR PROGRESS:

When you’re started new theme - please, change its status to In Progress

When you’re done with the theme - check its checkbox and it will become Completed automatically.

If for some reason you have skipped theme - please, change its status to Skipped

WHAT IF YOU WILL HAVE A QUESTION:

Just post it at comments section mentioned your mentor using AT sign (i.e. @Nick )

WHAT TO DO WHEN ALL THEMES ARE FINISHED:

You have to track the time you have spent on this ticket and move it into Done column of the Canban board
        `,
    );

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (isEditing) {
            textareaRef.current?.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = el.scrollHeight + 'px';
        }
    }, [text, isEditing]);

    const handleBlur = () => {
        setIsEditing(prev => !prev);
    };

    return (
        <div className={s.description}>
            <h2 className={s.description__title}>Description</h2>
            {isEditing ? (
                <div>
                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className={s.description__textarea}
                    />
                    <div>
                        <button className={s.description__saveBtn}>Save</button>
                        <button className={s.description__cancel} onClick={handleBlur}>
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <p onClick={handleBlur} className={s.description__text}>
                    {text}
                </p>
            )}
        </div>
    );
};
