import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import TitleText, {
  TitleTextPropTypes,
} from 'components/Base/Text/TitleText/TitleText';

interface PropTypes extends TitleTextPropTypes {
  date?: Date;
}

const DateTitle: React.FC<PropTypes> = memo(
  ({ level = 'h3', date = new Date() }) => {
    return (
      <View>
        <TitleText level={level} style={styles.text}>
          {format(date, 'eee dd, yyyy')}
        </TitleText>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
});

export default DateTitle;
