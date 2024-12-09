
import React from 'react';
import { View } from 'react-native';
import TapScreen from '@/components/TapScreen';
import TapTaskForm from '@/components/TapTaskForm';
import styles from './styles';
import { NewTaskScreenProps } from '@/navigation/rootParamsList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TapButton from '@/components/TapButton';

export default function NewTaskScreen ({
    navigation,
}: NewTaskScreenProps) {

    return (
        <TapScreen title="New Task">
            <KeyboardAwareScrollView>
                <View style={styles.view}>
                    <TapTaskForm onSubmit={navigation.goBack} />
                    <TapButton
                        label="Quay lại"
                        onPress={navigation.goBack}
                        style={styles.back}
                    />
                </View>
            </KeyboardAwareScrollView>
        </TapScreen>
    );
}
