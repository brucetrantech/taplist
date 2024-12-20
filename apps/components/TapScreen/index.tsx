import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';

type TapScreenProps = {
  children: React.ReactNode;
  title?: string;
  isScrolled?: boolean;
};

export default function TapScreen({
  children,
  title,
  isScrolled = false,
}: TapScreenProps) {
  return (
    <SafeAreaView style={styles.safe} testID="SafeAreaView">
      <StatusBar barStyle="light-content" />
      {title ? (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      ) : null}
      {isScrolled ? (
        <ScrollView style={styles.scroll} testID="ScrollView">
          {children}
        </ScrollView>
      ) : (
        <View style={styles.view} testID="View">
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}
