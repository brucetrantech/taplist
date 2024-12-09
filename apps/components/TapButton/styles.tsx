import themes from '@/commons/themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    touch: {
        width: '100%',
        height: 44,
        borderRadius: 22,
        backgroundColor: themes.color.primary.Two,
        padding: 14,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    reverse: {
        flexDirection: 'row-reverse',
    },
    label: {
        ...themes.font.mediumBold,
        color: themes.color.system.light,
    },
});
