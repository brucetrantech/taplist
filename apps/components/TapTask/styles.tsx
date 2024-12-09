import themes from '@/commons/themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        width: '100%',
        height: 114,
        padding: 24,
        borderRadius: 16,
        backgroundColor: themes.color.system.light,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSide: {
        width: 42,
        height: '100%',
    },
    rightSide: {
        minWidth: 60,
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    contentSide: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    label: {
        ...themes.font.largeBold,
        marginBottom: 24,
    },
    priority: {
        ...themes.font.normal,
        color: themes.color.system.success,
    },
    dueDate: themes.font.small,
});
