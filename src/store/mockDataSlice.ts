import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/core/types';
import { INITIAL_TASKS } from '@/core/constants';

interface TasksState {
    tasks: Task[];
    openModalId: string | null;
}

const initialState: TasksState = {
    tasks: INITIAL_TASKS,
    openModalId: null,
};

const mockDataSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createNewTask(
            state,
            action: PayloadAction<{
                id: string;
                status: Task['status'];
                title: string;
                description: string;
            }>,
        ) {
            state.tasks.push(action.payload);
        },
        updateTaskStatus(state, action: PayloadAction<{ id: string; status: Task['status'] }>) {
            const task = state.tasks.find(t => t.id === action.payload.id);
            if (task) {
                task.status = action.payload.status;
            }
        },
        openModal(state, action: PayloadAction<string>) {
            state.openModalId = action.payload;
        },
        closeModal(state) {
            state.openModalId = null;
        },
    },
});

export const { createNewTask, updateTaskStatus, openModal, closeModal } = mockDataSlice.actions;
export default mockDataSlice.reducer;
