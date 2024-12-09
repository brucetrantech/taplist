import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TapIcon from '@/components/TapIcon';
import styles from './styles';
import { Priority, Task } from '@/modules/tasks/models';
import { PriorityValues } from '@/commons/constants';
import TapSelect from '@/components/TapSelect';
import TapDatePicker from '@/components/TapDatePicker';
import { useAppDispatch, useAppSelector } from '@/states/stateHooks';
import { shallowEqual } from 'react-redux';
import themes from '@/commons/themes';
import { addTask, deleteTask, updateTask } from '@/modules/tasks/services';
import { validateTaskForm } from '@/commons/validation';

type TapTaskFormProps = {
    data?: Task;
    mode?: 'add' | 'update';
    onSubmit?: (value: Task) => void;
}

const priorities = Object.keys(PriorityValues).map(k => ({
    value: k as Priority,
    label: PriorityValues[k as Priority].short,
}));

export default function TapTaskForm ({
    data,
    mode = 'add',
    onSubmit,
}: TapTaskFormProps) {

    const [value, setValue] = useState<Task>(data || {
        uuid: '',
        content: '',
        dueDate: '',
        priority: 'high',
    });
    const [msgError, setMsgError] = useState<string>();

    const dispatch = useAppDispatch();

    const loading = useAppSelector(state => state.tasks.loading || false, shallowEqual);

    const onDelete = useCallback(() => {
        if (data?.uuid) {
            dispatch(deleteTask(data.uuid));
        }
    }, [data?.uuid, dispatch]);

    const onComplete = useCallback(() => {
        const isValid = validateTaskForm(value);
        if (isValid.hasError) {
            setMsgError(isValid.message);
            return;
        }
        const action = mode === 'add' ? addTask : updateTask;
        dispatch(action(value))
            .then(() => {
                if (onSubmit) {
                    onSubmit(value);
                }
            });
    }, [value, mode, onSubmit, dispatch]);

    return (
        <View style={styles.form}>
            <View style={styles.formHeader}>
                <TouchableOpacity
                    style={styles.trash}
                    onPress={onDelete}
                >
                    <TapIcon name="trash" />
                    <Text style={styles.trashText}>Xoá</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <TextInput
                    placeholder="Nhập task..."
                    value={value?.content || ''}
                    onChangeText={text => setValue({ ...value, content: text })}
                    style={styles.inputText}
                    editable={!loading}
                />
                <TapDatePicker
                    label="Thời hạn"
                    value={value.dueDate}
                    onChange={dueDate => setValue({ ...value, dueDate })}
                    disabled={loading}
                />
                <TapSelect
                    value={value.priority as string}
                    onChange={val => setValue({ ...value, priority: val as Priority })}
                    options={priorities}
                    label="Mức độ ưu tiên"
                    disabled={loading}
                />
                {msgError ? <Text style={styles.error}>{msgError}</Text> : null}
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.done}
                    onPress={onComplete}
                >
                    <Text style={styles.doneText}>Xong</Text>
                    {loading ? (
                        <ActivityIndicator size={18} color={themes.color.system.light} />
                    ) : null}
                </TouchableOpacity>
            </View>
        </View>
    );
}
