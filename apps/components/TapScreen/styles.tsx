import themes from '@/commons/themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: themes.color.primary.One,
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...themes.font.large,
    color: themes.color.system.light,
  },
  scroll: {},
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
