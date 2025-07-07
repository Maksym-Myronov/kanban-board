import React from 'react';
import { Task } from '@/core/types';
import { useDraggable } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { openModal, closeModal } from '@/store/mockDataSlice';
import { ModalWindowTask } from '../ModalWindowTask';

import s from './index.module.scss';

interface TaskCardProps {
    task: Task;
}

export const TaskWidget = ({ task }: TaskCardProps) => {
    const dispatch = useAppDispatch();
    const openModalId = useAppSelector(state => state.task.openModalId);

    const isModalWindowOpen = openModalId === task.id;

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

    const handleOpenModal = () => {
        dispatch(openModal(task.id));
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
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
                onClick={handleOpenModal}
            >
                <h3 className={s.task__title}>{task.title}</h3>
            </div>
            {isModalWindowOpen && (
                <ModalWindowTask
                    id={task.id}
                    status={task.status}
                    closeModal={handleCloseModal}
                    description={task.description}
                    title={task.title}
                />
            )}
        </>
    );
};
