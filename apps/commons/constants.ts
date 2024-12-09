import { Priority, Task } from '@/modules/tasks/models';
import themes from '@/commons/themes';

export const PriorityValues: {
    [key in Priority]: {
        label: string;
        short: string;
        color?: string;
    }
} = {
    high: {
        label: 'Ưu tiên cao',
        short: 'Cao',
        color: themes.color.system.success,
    },
    medium: {
        label: 'Ưu trung bình',
        short: 'Trung Bình',
        color: themes.color.system.warn,
    },
    low: {
        label: 'Ưu tiên thấp',
        short: 'Thấp',
        color: themes.color.system.dark,
    },
};

export const DATE_FORMATTER = 'DD/MM/yyyy';

export const TASK_KEY = 'tasks';

export const priorityOrder: Record<Task['priority'], number> = {
    high: 1,
    medium: 2,
    low: 3,
};
