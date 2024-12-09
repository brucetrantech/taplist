import { TasksSliceType } from '@/modules/tasks/models';
import tasksReducer, { taskInitialState } from '@/modules/tasks/reducer';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export type RootState = {
    tasks: TasksSliceType;
};

export const preloadedState: RootState = {
    tasks: taskInitialState,
};

const reducers = {
    tasks: tasksReducer,
};

const state = configureStore({
    reducer: reducers,
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware: () => any) => {
        if (__DEV__) {
            return getDefaultMiddleware().concat(logger);
        }
        return getDefaultMiddleware();
    },
});

export type AppDispatch = typeof state.dispatch;
export type AppStore = ReturnType<typeof state>;

export default state;
