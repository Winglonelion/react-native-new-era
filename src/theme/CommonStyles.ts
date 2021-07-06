import { StyleSheet, ViewStyle } from 'react-native';
import Colors from 'theme/colors';
import CommonHeights from './CommonHeights';

const CommonStyles = {
  flex1: { flex: 1 } as ViewStyle,

  container: {
    flex: 1,
    backgroundColor: Colors.white,
  } as ViewStyle,

  absolute: StyleSheet.absoluteFillObject,

  flex1Center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  alignCenter: { alignItems: 'center' } as ViewStyle,

  activityIndicator: {
    marginVertical: CommonHeights.res5,
  } as ViewStyle,

  opacity5: { opacity: 0.5 } as ViewStyle,

  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  row: {
    flexDirection: 'row',
  } as ViewStyle,
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 1,
    elevation: 2,
  } as ViewStyle,
  menuItem: {
    borderBottomColor: Colors.greyBrown,
    borderTopColor: Colors.greyBrown,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  } as ViewStyle,
  line: {
    width: '100%',
    left: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyBrown,
  } as ViewStyle,
};

export default CommonStyles;
