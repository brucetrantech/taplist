import themes from '@/commons/themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    form: {
        width: '100%',
        backgroundColor: themes.color.system.light,
        borderRadius: 16,
        padding: 24,
    },
    formHeader: {
        width: '100%',
        height: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    trash: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    trashText: themes.font.normal,
    content: {},
    inputText: {
        borderBottomColor: themes.color.system.dark,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 12,
        fontWeight: '600',
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    done: {
        width: 85,
        height: 28,
        borderRadius: 14,
        backgroundColor: themes.color.system.success,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneText: {
        ...themes.font.normalBold,
        color: themes.color.system.light,
    },
    error: {
        ...themes.font.normalBold,
        color: themes.color.primary.Two,
        alignSelf: 'center',
        paddingTop: 12,
        paddingBottom: 4,
    },
});
