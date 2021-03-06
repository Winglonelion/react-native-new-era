import React, { memo } from 'react';
import {
  GestureResponderEvent,
  OpaqueColorValue,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ContentText from 'components/Base/Text/ContentText/ContentText';

export interface PropTypes {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  tint?: OpaqueColorValue | string;
}

const ActionButton: React.FC<PropTypes> = memo(
  ({ text = '', onPress, disabled = false, tint }) => {
    return (
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View>
          <ContentText color={tint}>{text.toUpperCase()}</ContentText>
        </View>
      </TouchableWithoutFeedback>
    );
  },
);
export default ActionButton;
