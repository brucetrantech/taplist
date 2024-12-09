export type Priority = 'high' | 'medium' | 'low';

export type Task = {
    uuid: string;
    content: string;
    dueDate: string;
    priority: Priority;
}

export type TasksSliceType = {
    list: Array<Task>;
    loading?: boolean;
    error?: string;
}
