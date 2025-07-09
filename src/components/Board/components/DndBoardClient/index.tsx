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
import { TaskWidget } from '../Column/components/TaskWidget';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TASKS } from '@/graphql/queries/tasks/index';
import { UPDATE_TASK_STATUS } from '@/graphql/mutations/tasks/updateTask';
export interface GetTasksResponse {
    tasks: Task[];
}

interface ColumnProps {
    column: ColumnType[];
}

export const DndBoardClient = ({ column }: ColumnProps) => {
    const { data, loading, error } = useQuery<GetTasksResponse>(GET_TASKS);
    const [updateTask] = useMutation(UPDATE_TASK_STATUS);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;
        setActiveId(active.id as string);
        const draggedTask = data?.tasks.find(t => t.id === active.id);
        setActiveTask(draggedTask || null);
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as ColumnType['id'];

        updateTask({
            variables: {
                id: taskId,
                status: newStatus,
            },
            optimisticResponse: {
                updateTask: {
                    id: taskId,
                    status: newStatus,
                    __typename: 'Task',
                },
            },
        });
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
                    tasks={data?.tasks.filter(element => element.status === item.id) || []}
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
