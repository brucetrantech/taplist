import {createAsyncThunk} from '@reduxjs/toolkit';
import {Task} from '@/modules/tasks/models';
import DBTaskProvider from '@/modules/tasks/providers';

export const listTasks = createAsyncThunk(
  'tasks/listTask',
  async (_, {rejectWithValue}) => {
    try {
      return await DBTaskProvider.list();
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (payload: Task, {rejectWithValue}) => {
    try {
      return await DBTaskProvider.add(payload);
    } catch (err) {
      rejectWithValue('Tạo task bị lỗi!');
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (payload: Task, {rejectWithValue}) => {
    const result = await DBTaskProvider.update(payload);
    if (result) {
      return payload;
    }
    rejectWithValue('Cập nhật task bị lỗi!');
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (payload: string, {rejectWithValue}) => {
    const result = await DBTaskProvider.delete(payload);
    if (result) {
      return payload;
    }
    rejectWithValue('Xoá task bị lỗi!');
  },
);
