import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import themes from './commons/themes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainScreen from '@/screens';
import StateProvider from '@/states/StateProvider';

export default function App() {
  return (
    <StateProvider>
      <GestureHandlerRootView style={styles.gesture}>
        <MainScreen />
      </GestureHandlerRootView>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: themes.font.large,
});
