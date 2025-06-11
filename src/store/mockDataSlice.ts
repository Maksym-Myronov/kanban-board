import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/core/types';
import { INITIAL_TASKS } from '@/core/constants';

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: INITIAL_TASKS,
};

const mockDataSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateTaskStatus(state, action: PayloadAction<{ id: string; status: Task['status'] }>) {
            const task = state.tasks.find(t => t.id === action.payload.id);
            if (task) {
                task.status = action.payload.status;
            }
        },
    },
});

export const { updateTaskStatus } = mockDataSlice.actions;
export default mockDataSlice.reducer;
