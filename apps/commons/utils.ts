import {Priority, Task} from '@/modules/tasks/models';
import moment from 'moment';
import themes from './themes';
import {
  DATE_FORMATTER,
  priorityOrder,
  PriorityValues,
} from '@/commons/constants';

export function getPriorityValue(priority: Priority): string[] {
  const value = PriorityValues[priority];
  if (!value) {
    return ['N/A', themes.color.gray.level1];
  }
  return [value.label, value.color || themes.color.gray.level1];
}

export function formatDate(
  date: Date,
  formatter: string = DATE_FORMATTER,
): string {
  return moment(date).format(formatter);
}

export function getRemainDays(date: Date | string): string {
  try {
    const inputDate = moment(date, DATE_FORMATTER);
    if (!inputDate.isValid()) {
      throw new Error('Invalid date input');
    }
    const remains = inputDate.diff(moment(), 'days');
    if (remains <= 0) {
      return 'Hôm nay';
    }
    return `Còn lại ${remains} ngày`;
  } catch (err) {
    throw err;
  }
}

export function isValidDate(date: string): boolean {
  const inputDate = moment(date, DATE_FORMATTER);
  return inputDate.isValid();
}

export function convertToDate(date: string): Date | undefined {
  const dateValue = moment(date, DATE_FORMATTER);
  if (!dateValue.isValid()) {
    return undefined;
  }
  return dateValue.toDate();
}

export function sortTaskByPriority(tasks: Array<Task> = []): Array<Task> {
  const update = Object.assign([] as Array<Task>, tasks);
  return update.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
  );
}
