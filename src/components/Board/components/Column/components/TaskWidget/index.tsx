import React from 'react';
import { Task } from '@/core/types';
import { useDraggable } from '@dnd-kit/core';
import { ModalWindowTask } from '../ModalWindowTask';
import { useReactiveVar } from '@apollo/client';
import { openTaskModalIdVar } from '@/graphql/localState/modalState';

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

    const openModalId = useReactiveVar(openTaskModalIdVar);
    const isOpen = openModalId === task.id;

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined;

    const handleToggleModalWindow = () => {
        openTaskModalIdVar(isOpen ? null : task.id);
    };

    return (
        <>
            <div
                className={s.task__card}
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                style={style}
                aria-describedby={`task-${task.id}`}
                onClick={handleToggleModalWindow}
            >
                <h3 className={s.task__title}>{task.title}</h3>
            </div>
            {isOpen && (
                <ModalWindowTask
                    id={task.id}
                    status={task.status}
                    closeModal={handleToggleModalWindow}
                    description={task.description}
                    title={task.title}
                />
            )}
        </>
    );
};
