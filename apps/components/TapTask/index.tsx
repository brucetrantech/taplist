import React, { useCallback, useState } from 'react';
import styles from './styles';
import { Task } from '@/modules/tasks/models';
import { Text, View } from 'react-native';
import TapIcon from '../TapIcon';
import themes from '@/commons/themes';
import { getPriorityValue, getRemainDays } from '@/commons/utils';
import TapTaskForm from '../TapTaskForm';

type TapTaskProps = {
    data: Task;
};

export default function TapTask ({ data }: TapTaskProps) {

    const [isUpdated, setIsUpdated] = useState(false);


    const [priorityText, priorityColor] = getPriorityValue(data.priority);

    const remainDays = getRemainDays(data.dueDate);

    const onSubmit = useCallback(() => {
       setIsUpdated(false);
    }, []);

    if (isUpdated) {
        return (
            <TapTaskForm
                data={data}
                mode="update"
                onSubmit={onSubmit}
            />
        );
    }

    return (
        <View style={styles.view}>
            <View style={styles.leftSide}>
                <TapIcon name="square" color={themes.color.gray.level1} />
            </View>
            <View style={styles.contentSide}>
                <Text style={styles.label}>
                    {data.content}
                </Text>
                <Text style={[styles.priority, { color: priorityColor }]}>
                    {priorityText}
                </Text>
            </View>
            <View style={styles.rightSide}>
                <TapIcon
                    name="edit"
                    color={themes.color.system.dark}
                    onPress={() => setIsUpdated(true)}
                />
                <Text style={styles.dueDate}>{remainDays}</Text>
            </View>
        </View>
    );
}
