import React from 'react';
import {render} from '@testing-library/react-native';
import TapScreen from '@/components/TapScreen';
import {Text} from 'react-native';
import styles from '@/components/TapScreen/styles';

describe('TapScreen Component', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <TapScreen>
        <Text>Child Component</Text>
      </TapScreen>,
    );

    expect(getByText('Child Component')).toBeTruthy();
  });

  it('renders the title if provided', () => {
    const {getByText} = render(
      <TapScreen title="Test Title">
        <Text>Child Component</Text>
      </TapScreen>,
    );

    expect(getByText('Test Title')).toBeTruthy();
  });

  it('does not render the title if not provided', () => {
    const {queryByText} = render(
      <TapScreen>
        <Text>Child Component</Text>
      </TapScreen>,
    );

    expect(queryByText('Test Title')).toBeNull();
  });

  it('renders content inside a ScrollView when `isScrolled` is true', () => {
    const {getByTestId} = render(
      <TapScreen isScrolled>
        <Text>Scrollable Content</Text>
      </TapScreen>,
    );

    expect(getByTestId('ScrollView')).toBeTruthy();
  });

  it('renders content inside a View when `isScrolled` is false', () => {
    const {getByTestId} = render(
      <TapScreen>
        <Text>Non-Scrollable Content</Text>
      </TapScreen>,
    );

    expect(getByTestId('View')).toBeTruthy();
  });

  it('applies the correct styles for SafeAreaView', () => {
    const {getByTestId} = render(
      <TapScreen>
        <Text>Styled Content</Text>
      </TapScreen>,
    );

    const safeAreaView = getByTestId('SafeAreaView');
    expect(safeAreaView.props.style).toEqual(styles.safe);
  });
});
