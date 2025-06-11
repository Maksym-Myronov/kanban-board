'use client';

import React, { useState } from 'react';
import { Column as ColumnType, Task } from '@/core/types';
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    useSensor,
    useSensors,
    PointerSensor,
} from '@dnd-kit/core';
import { Column } from '../Column';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { updateTaskStatus } from '@/store/mockDataSlice';
import { TaskWidget } from '../Column/components/TaskWidget';

interface ColumnProps {
    column: ColumnType[];
}

export const DndBoardClient = ({ column }: ColumnProps) => {
    const dispatch = useAppDispatch();
    const task = useAppSelector(tasks => tasks.task.tasks);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
    );

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;
        setActiveId(active.id as string);
        const draggedTask = task.find(t => t.id === active.id);
        setActiveTask(draggedTask || null);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as ColumnType['id'];

        dispatch(updateTaskStatus({ id: taskId, status: newStatus }));
        setActiveId(null);
        setActiveTask(null);
    }

    return (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            {column.map(item => (
                <Column
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    tasks={task.filter(element => element.status === item.id)}
                />
            ))}
            <DragOverlay>
                {activeId && activeTask ? (
                    <div
                        style={{
                            opacity: 0.8,
                            cursor: 'grabbing',
                            width: '370px',
                        }}
                    >
                        <TaskWidget task={activeTask} />
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};
