import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeDarkBlue,
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
    color: colors.white,
  },
  result: {
    fontSize: 24,
    height: 28,
    textAlign: 'right',
    color: colors.white,
  },
  keyBord: {
    flex: 0.5,
    backgroundColor: colors.white,
  },
  row: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  delete: {
    overflow: 'hidden',
    height: 32,
    width: 32,
  },
  bottom: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 0.75,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  right: {
    flex: 0.25,
  },
  bottomRow: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    fontSize: 20,
    color: colors.themeBlack,
  },
});

export default styles;
