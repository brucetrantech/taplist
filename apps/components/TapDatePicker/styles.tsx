import themes from '@/commons/themes';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: themes.color.system.dark,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 12,
    },
    label: themes.font.mediumBold,
});
