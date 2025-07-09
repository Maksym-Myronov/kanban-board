import { INITIAL_TASKS } from '@/core/constants';
import { Task, TaskStatus } from '@/core/types';
import { createTask, updateDescription, updateTask } from '@/core/utils';

export const resolvers = {
    Query: {
        tasks: () => INITIAL_TASKS,
    },
    Mutation: {
        createTask: (_: null, { id, title, description, status }: Task) =>
            createTask({ id, title, description, status }),

        updateTask: (_: null, { id, status }: { id: string; status: TaskStatus }): Task | null =>
            updateTask(id, status),
        updateDescription: (
            _: null,
            { id, description }: { id: string; description: string },
        ): Task | null => updateDescription(id, description),
    },
};
