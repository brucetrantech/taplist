import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from './TodoListScreen';
import { RootStackParamsList } from '@/navigation/rootParamsList';
import { navigationRef } from '@/navigation/navigationServices';
import NewTaskScreen from '@/screens/NewTaskScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function MainScreen() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
            initialRouteName="todoList"
            screenOptions={{
                headerShown: false,
            }}
        >
          <Stack.Screen name="newTask" component={NewTaskScreen} />
          <Stack.Screen name="todoList" component={TodoListScreen} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
