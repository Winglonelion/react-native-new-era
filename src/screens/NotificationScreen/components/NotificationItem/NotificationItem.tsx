import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import TitleText from 'components/Base/Text/TitleText';
import { observer } from 'mobx-react';
import { NotificationItem as NotificationItemTypes } from '../../NotificationScreen.store';
import ContentText from 'components/Base/Text/ContentText/ContentText';
import CheckBox from 'components/Base/CheckBox/CheckBox';
// import Colors from 'theme/colors';
interface PropTypes {
  item: NotificationItemTypes;
}

const NotificationItem: React.FC<PropTypes> = ({ item }) => {
  const onPressCheckbox = () => {
    item.toggleSelect();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressCheckbox}>
        <View style={styles.iconCol}>
          <CheckBox checked={item.selected} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.contentCol}>
        <View style={styles.titleRow}>
          <TitleText level="h4">{item.title}</TitleText>
          <TitleText level="h5">{item.time}</TitleText>
        </View>
        <View>
          <ContentText size={16}>{[item.message]}</ContentText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    paddingRight: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCol: {
    paddingHorizontal: 16,
    height: '80%',
    justifyContent: 'center',
  },
  contentCol: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  activeText: {
    fontWeight: '500',
    // color: Colors.
  },
});

export default observer(NotificationItem);
