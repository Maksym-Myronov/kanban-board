import React from 'react';
import { Task } from '@/core/types';
import { useDraggable } from '@dnd-kit/core';

import s from './index.module.scss';

interface TaskCardProps {
    task: Task;
}

export const TaskWidget = ({ task }: TaskCardProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
        data: {
            type: 'task',
            task,
        },
    });

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined;

    return (
        <div
            className={s.task__card}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            aria-describedby={`task-${task.id}`}
        >
            <h3 className={s.task__title}>{task.title}</h3>
            <p className={s.task__description}>{task.description}</p>
        </div>
    );
};
