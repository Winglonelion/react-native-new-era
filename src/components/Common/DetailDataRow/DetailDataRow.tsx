import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import ContentText from 'components/Base/Text/ContentText';
import Colors from 'theme/colors';
import { PressEvent } from 'types/events';

interface PropTypes {
  title: string;
  content?: string | number | null;
  onPress?: PressEvent;
}

const DetailDataRow: React.FC<PropTypes> = memo(
  ({ title, content, onPress }) => {
    return (
      <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.content}>
            <ContentText size={16} style={styles.text}>
              {title}
            </ContentText>
            <ContentText size={16} style={[styles.text, styles.contentTxt]}>
              {content || '—'}
            </ContentText>
          </View>
          {!!onPress && (
            <Image
              source={require('images/chevron_right_light_brown.png')}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  content: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  contentTxt: {
    color: Colors.lightBrown,
  },
  text: {
    lineHeight: 30,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 8,
  },
});

export default DetailDataRow;
