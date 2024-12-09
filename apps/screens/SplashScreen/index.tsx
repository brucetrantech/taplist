import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { SplashScreenProps } from '@/navigation/rootParamsList';

export default function SplashScreen ({ navigation }: SplashScreenProps) {

    const checkRightScreen = useCallback(async () => {
        /** Handle logic here **/
        setTimeout(() => {
            navigation.navigate('todoList');
        }, 2000);
    }, [navigation]);

    useEffect(() => {
        checkRightScreen();
    }, [checkRightScreen]);

    return (
        <View style={styles.view}>
            <Text>Splash screen</Text>
        </View>
    );
}
