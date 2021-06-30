import { StyleSheet } from 'react-native';
import { responsiveHeight } from 'utils/screen';

const styles = StyleSheet.create({
  image: {
    width: responsiveHeight(280),
    resizeMode: 'contain',
    height: responsiveHeight(280),
  },
});

export default styles;
