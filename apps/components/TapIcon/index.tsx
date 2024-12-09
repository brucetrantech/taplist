import React from 'react';
import {
    Pressable,
    type GestureResponderEvent,
    type StyleProp,
    type View,
    type ViewStyle,
} from 'react-native';
import {
    SvgXml,
} from 'react-native-svg';
import {
    SvgResources,
    type IconName,
} from './resources';
import themes from '@/commons/themes';

type TapIconProps = {
    name: IconName;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    onPress?: (e?: GestureResponderEvent) => void;
    onPressIn?: (e?: GestureResponderEvent) => void;
    onPressOut?: (e?: GestureResponderEvent) => void;
    onLongPress?: (e?: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    testID?: string;
};

const TapIcon = React.forwardRef<View, TapIconProps>(({
    name,
    color = themes.color.system.dark,
    size = 18,
    width,
    height,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    style,
    testID,
}, ref) => {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            onPressOut={onPressOut}
            onPressIn={onPressIn}
            style={style}
            ref={ref}
        >
            <SvgXml
                xml={SvgResources[name](color)}
                width={width || size}
                height={height || size}
                testID={testID}
            />
        </Pressable>
    );
});

export default TapIcon;
