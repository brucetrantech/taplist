import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import TapIcon from '@/components/TapIcon';
import {SvgResources} from './resources';

jest.mock('./resources', () => ({
  SvgResources: {
    testIcon: jest.fn((color: string) => `<svg fill="${color}"/>`),
  },
}));

describe('TapIcon Component', () => {
  const defaultProps = {
    name: 'testIcon',
    testID: 'icon-svg',
  };

  it('renders correctly with default size and color', () => {
    const {getByTestId} = render(<TapIcon {...defaultProps} />);

    const svgElement = getByTestId('icon-svg');
    expect(SvgResources.testIcon).toHaveBeenCalledWith('#000000');
    expect(svgElement.props.width).toBe(18);
    expect(svgElement.props.height).toBe(18);
  });

  it('renders correctly with custom size and color', () => {
    const {getByTestId} = render(
      <TapIcon {...defaultProps} size={24} color="#ff0000" />,
    );

    const svgElement = getByTestId('icon-svg');
    expect(SvgResources.testIcon).toHaveBeenCalledWith('#ff0000');
    expect(svgElement.props.width).toBe(24);
    expect(svgElement.props.height).toBe(24);
  });

  it('handles onPress event', () => {
    const mockOnPress = jest.fn();
    const {getByTestId} = render(
      <TapIcon {...defaultProps} onPress={mockOnPress} />,
    );

    fireEvent.press(getByTestId('icon-svg'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('handles onPressIn and onPressOut events', () => {
    const mockOnPressIn = jest.fn();
    const mockOnPressOut = jest.fn();

    const {getByTestId} = render(
      <TapIcon
        {...defaultProps}
        onPressIn={mockOnPressIn}
        onPressOut={mockOnPressOut}
      />,
    );

    fireEvent(getByTestId('icon-svg'), 'pressIn');
    expect(mockOnPressIn).toHaveBeenCalled();

    fireEvent(getByTestId('icon-svg'), 'pressOut');
    expect(mockOnPressOut).toHaveBeenCalled();
  });

  it('handles onLongPress event', () => {
    const mockOnLongPress = jest.fn();

    const {getByTestId} = render(
      <TapIcon {...defaultProps} onLongPress={mockOnLongPress} />,
    );

    fireEvent(getByTestId('icon-svg'), 'longPress');
    expect(mockOnLongPress).toHaveBeenCalled();
  });
});
