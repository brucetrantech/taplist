import React, { useMemo } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import TapIcon from '@/components/TapIcon';
import { IconName } from '@/components/TapIcon/resources';
import themes from '@/commons/themes';
import styles from './styles';

type TapButtonProps = {
    label: string;
    icon?: {
        name: IconName;
        color?: string;
        size?: number;
        position?: 'left' | 'right';
    };
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export default function TapButton ({
    label,
    icon,
    backgroundColor = themes.color.primary.Two,
    style,
    onPress,
}: TapButtonProps) {

    const iconResults = useMemo(() => {
        if (!icon?.name) {
            return undefined;
        }
        return {
            name: icon.name,
            color: icon?.color || themes.color.system.dark,
            size: icon?.size || 18,
        };
    }, [icon]);

    const positionStyles = useMemo(
        () => icon && icon.position === 'left' ? styles.reverse : null,
        [icon],
    );

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.touch, { backgroundColor }, style]}
            activeOpacity={0.8}
        >
            <View
                style={[
                    styles.content,
                    positionStyles,
                ]}
            >
                <Text style={styles.label}>{label}</Text>
                {iconResults ? <TapIcon {...iconResults} /> : null}
            </View>
        </TouchableOpacity>
    );
}
