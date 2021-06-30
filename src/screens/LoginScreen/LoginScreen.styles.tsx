import { StyleSheet } from 'react-native';
import CommonWidths from 'theme/CommonWidths';
import { responsiveHeight } from 'utils/screen';

const styles = StyleSheet.create({
  titleTxt: {
    fontSize: 18,
    letterSpacing: 0.1,
    fontWeight: '600',
  },
  coverImage: {
    width: responsiveHeight(211),
    height: responsiveHeight(213),
  },
  topView: {
    flex: 1,
    paddingTop: responsiveHeight(56),
    paddingBottom: responsiveHeight(48),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentView: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    // paddingLeft: CommonWidths.res30,
    paddingHorizontal: CommonWidths.res30,
    // paddingRight: CommonWidths.res34,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  upArrowImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginTop: 15,
  },
});

export default styles;
