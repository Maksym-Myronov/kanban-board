import type { Editor } from '@tiptap/react';
import { COLORS } from '@/core/constants';

import s from './index.module.scss';

interface ColorsProps {
    editor: Editor | null;
    setIsColorsOpen: (value: boolean) => void;
}

export const Colors = ({ editor, setIsColorsOpen }: ColorsProps) => {
    if (!editor) {
        return null;
    }

    const handleSetColor = (color: string): boolean => {
        setIsColorsOpen(false);
        return editor.chain().focus().setColor(color).run();
    };

    return (
        <div className={s.color}>
            <div className={s.color__grid}>
                {COLORS.map(item => (
                    <div
                        key={item.id}
                        className={s.color__value}
                        style={{ background: item.color }}
                        title={item.title}
                        onClick={() => {
                            handleSetColor(item.color);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
