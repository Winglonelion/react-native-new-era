import React, { useCallback, memo } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import TitleText from 'components/Base/Text/TitleText';
import CommonStyles from 'theme/CommonStyles';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'theme/colors';
import { capitalize } from 'lodash';
import { MaritalStatusTypes } from 'data/user/UserProfileStore';

interface PropTypes {
  isSelected: boolean;
  text: string;
  selectItem?: (text: MaritalStatusTypes) => void;
}

const SelectMaritalItem: React.FC<PropTypes> = memo(
  ({ isSelected, text, selectItem }) => {
    const onPress = useCallback(() => {
      selectItem && selectItem(text as MaritalStatusTypes);
    }, [text, selectItem]);

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.itemView}>
          <TitleText>{capitalize(text)}</TitleText>
          {isSelected && <Icon name="check" color={Colors.orange} size={24} />}
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = StyleSheet.create({
  itemView: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    ...CommonStyles.menuItem,
    borderBottomWidth: 0,
  },
});

export default SelectMaritalItem;
