import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import mockDataReducer from './mockDataSlice';

export const store = configureStore({
    reducer: {
        task: mockDataReducer,
    },
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
