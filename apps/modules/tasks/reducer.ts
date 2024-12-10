import {createSlice} from '@reduxjs/toolkit';
import {Task, TasksSliceType} from '@/modules/tasks/models';
import {
  addTask,
  deleteTask,
  listTasks,
  updateTask,
} from '@/modules/tasks/actions';

export const taskInitialState: TasksSliceType = {
  list: [],
  loading: false,
  error: undefined,
};

const tasks = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    setLoading: () => {},
  },
  extraReducers: builder =>
    builder
      .addCase(listTasks.pending, state => {
        state.loading = true;
      })
      .addCase(listTasks.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = undefined;
        state.list = payload.payload || [];
      })
      .addCase(listTasks.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload?.error?.message || 'List task failed!';
      })
      .addCase(addTask.pending, (state, _payload) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = undefined;
        const newData = payload?.payload;
        if (newData) {
          state.list = [newData, ...state.list];
        }
      })
      .addCase(addTask.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload?.error?.message || 'Added task failed!';
      })
      .addCase(updateTask.pending, (state, _payload) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = undefined;
        const updatedData = payload?.payload;
        if (updatedData) {
          const temp = Object.assign([], state.list) as Array<Task>;
          const update = temp.map(item =>
            item.uuid === updatedData.uuid ? updatedData : item,
          );
          state.list = update;
        }
      })
      .addCase(updateTask.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload?.error?.message || 'Updated task failed!';
      })
      .addCase(deleteTask.pending, (state, _payload) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = undefined;
        const updatedData = payload?.payload;
        if (updatedData) {
          const temp = Object.assign([], state.list) as Array<Task>;
          const update = temp.filter(item => item.uuid !== updatedData);
          state.list = update;
        }
      })
      .addCase(deleteTask.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload?.error?.message || 'Deleted task failed!';
      }),
});

export default tasks.reducer;
