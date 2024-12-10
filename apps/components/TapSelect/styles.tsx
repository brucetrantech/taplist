import themes from '@/commons/themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    borderBottomColor: themes.color.system.dark,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 12,
  },
  flex: {flex: 1},
  label: themes.font.mediumBold,
  inputIOSContainer: {},
  inputAndroid: {},
});
