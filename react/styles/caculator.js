import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeLightGray,
  },
  screen: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  screenText: {
    fontSize: 16,
    height: 20,
    textAlign: 'right',
    color: colors.themeBlak,
  },
  keyBord: {
    flex: 0.5,
    backgroundColor: colors.white,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: colors.themeGray,
  },
  text: {
    fontSize: 16,
    color: colors.themeBlak,
  },
});

export default styles;
