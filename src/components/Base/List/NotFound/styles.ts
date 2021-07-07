import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import Colors from 'theme/colors';

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: CommonWidths.res1,
  },
  textEmpty: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: CommonHeights.res18,
    letterSpacing: -0.4,
    color: Colors.lightBrown,
  },
  iconImage: {
    width: CommonWidths.res200,
    height: CommonWidths.res200,
  },
  icon: {
    color: Colors.greyBrown,
  },
});

export default styles;
