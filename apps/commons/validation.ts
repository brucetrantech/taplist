import {Task} from '@/modules/tasks/models';
import {isValidDate} from '@/commons/utils';

export function validateTaskForm(data: Task) {
  const message = (() => {
    if (!data) {
      return 'Undefined data';
    }
    if (!data?.content || data.content.trim() === '') {
      return 'Content is empty';
    }
    if (!data?.priority) {
      return 'Priority is empty';
    }
    if (!data?.dueDate || data.dueDate.trim() === '') {
      return 'Due Date is empty';
    }
    if (!isValidDate(data.dueDate)) {
      return 'Due Date is invalid';
    }
    return undefined;
  })();
  return {
    hasError: Boolean(message),
    message: message,
  };
}
