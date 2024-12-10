import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TapButton from '@/components/TapButton';

describe('TapButton Component', () => {
  it('renders correctly with the given label', () => {
    const {getByText} = render(
      <TapButton label="Click Me" onPress={() => {}} />,
    );

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <TapButton label="Press Me" onPress={mockOnPress} />,
    );

    const button = getByText('Press Me');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
