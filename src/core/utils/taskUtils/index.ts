import { INITIAL_TASKS } from '@/core/constants';
import { Task, TaskStatus } from '@/core/types';

export const createTask = (task: Task): Task => {
    INITIAL_TASKS.push(task);
    return task;
};

export const updateTask = (id: string, status: TaskStatus): Task | null => {
    const task = INITIAL_TASKS.find(t => t.id === id);
    if (!task) return null;
    task.status = status;
    return task;
};

export const updateDescription = (id: string, description: string): Task | null => {
    const task = INITIAL_TASKS.find(t => t.id === id);
    if (!task) return null;
    task.description = description;
    return task;
};
