import themes from '@/commons/themes';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 24,
  },
  list: {
    width: '100%',
    paddingBottom: 80,
  },
  item: {
    width: '100%',
  },
  separator: {
    width: '100%',
    height: 24,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    padding: 24,
    backgroundColor: themes.color.primary.One,
  },
});
