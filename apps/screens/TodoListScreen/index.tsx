import React, {useEffect} from 'react';
import {listTasks} from '@/modules/tasks/actions';
import {useAppDispatch, useAppSelector} from '@/states/stateHooks';
import TapScreen from '@/components/TapScreen';
import TapTask from '@/components/TapTask';
import {View} from 'react-native';
import styles from './styles';
import {shallowEqual} from 'react-redux';
import TapButton from '@/components/TapButton';
import themes from '@/commons/themes';
import {TodoListScreenProps} from '@/navigation/rootParamsList';
import TapTaskForm from '@/components/TapTaskForm';
import {sortTaskByPriority} from '@/commons/utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function TodoListScreen({navigation}: TodoListScreenProps) {
  const tasks = useAppSelector(state => state.tasks.list, shallowEqual);

  const dispatch = useAppDispatch();

  const sortedList = sortTaskByPriority(tasks);

  useEffect(() => {
    dispatch(listTasks());
  }, [dispatch]);

  return (
    <TapScreen title="To-do list">
      <KeyboardAwareScrollView style={styles.view}>
        {sortedList?.length > 0 ? (
          <View style={styles.list}>
            {sortedList.map((task, i) => (
              <View style={styles.item} key={task.uuid}>
                <TapTask data={task} />
                {i !== sortedList.length - 1 ? (
                  <View style={styles.separator} />
                ) : null}
              </View>
            ))}
          </View>
        ) : (
          <TapTaskForm />
        )}
      </KeyboardAwareScrollView>
      <View style={styles.bottom}>
        <TapButton
          label="Tạo task mới"
          icon={{
            name: 'plus',
            size: 18,
            color: themes.color.system.light,
            position: 'right',
          }}
          onPress={() => navigation.navigate('newTask')}
        />
      </View>
    </TapScreen>
  );
}
