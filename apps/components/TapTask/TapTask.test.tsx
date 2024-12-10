import React from 'react';
import {render} from '@testing-library/react-native';
import TapTask from '@/components/TapTask';
import {getPriorityValue, getRemainDays} from '@/commons/utils';
import {Task} from '@/modules/tasks/models';

// Mock the TapTaskForm to avoid rendering it
jest.mock('@/components/TapTaskForm', () => {
  return jest.fn(() => null);
});

jest.mock('@/commons/utils', () => ({
  getPriorityValue: jest.fn(),
  getRemainDays: jest.fn(),
}));

describe('TapTask Component', () => {
  const defaultTask = {
    content: 'Sample Task',
    priority: 'high',
    dueDate: '2024-12-31',
  } as Task;

  beforeEach(() => {
    jest.clearAllMocks();
    (getPriorityValue as jest.Mock).mockReturnValue(['High Priority', 'red']);
    (getRemainDays as jest.Mock).mockReturnValue('5 days remaining');
  });

  it('renders correctly with task data', () => {
    const {getByText, getByTestId} = render(<TapTask data={defaultTask} />);

    expect(getByText('Sample Task')).toBeTruthy();
    expect(getByText('High Priority')).toBeTruthy();
    expect(getByText('5 days remaining')).toBeTruthy();
    expect(getByTestId('icon-square')).toBeTruthy();
    expect(getByTestId('icon-edit')).toBeTruthy();
  });

  it('renders priority with correct color', () => {
    const {getByText} = render(<TapTask data={defaultTask} />);
    const priorityText = getByText('High Priority');

    expect(priorityText.props.style).toContainEqual({color: 'red'});
  });

  it('calls getPriorityValue and getRemainDays with correct arguments', () => {
    render(<TapTask data={defaultTask} />);

    expect(getPriorityValue).toHaveBeenCalledWith('high');
    expect(getRemainDays).toHaveBeenCalledWith('2024-12-31');
  });
});
