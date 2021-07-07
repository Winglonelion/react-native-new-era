import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import CheckBox from 'components/Base/CheckBox/CheckBox';
import { observer } from 'mobx-react';
import Colors from 'theme/colors';
import ContentText from 'components/Base/Text/ContentText';
import { HIT_SLOP } from 'theme/touch';
import useNotificationScreenActionBarLogic from './NotificationScreenActionBar.logic';
import messages from './NotificationScreenActionBar.messages';
import { SELECT_MODE } from 'screens/NotificationScreen/NotificationScreen.store';

const NotificationScreenActionBar = ({}) => {
  const { toggleSelectMode, selectMode, markAsRead } =
    useNotificationScreenActionBarLogic();

  const reactiveColor =
    selectMode === SELECT_MODE.IDLE ? Colors.uncheck : Colors.orange;
  const disabledMarkButton = selectMode === SELECT_MODE.IDLE;
  return (
    <View style={styles.actionBar}>
      {/* select all checkbox */}
      <TouchableWithoutFeedback onPress={toggleSelectMode}>
        <View style={styles.selectModeBox}>
          <View style={styles.checkBoxView}>
            <CheckBox
              checked={selectMode !== SELECT_MODE.IDLE}
              checkedIconName={
                selectMode === SELECT_MODE.SELECT ? 'minus' : 'check'
              }
            />
          </View>
          <ContentText color={Colors.orange} size={14} weight="600">
            {messages.button_select_all}
          </ContentText>
        </View>
      </TouchableWithoutFeedback>
      {/* mark add read */}
      <TouchableWithoutFeedback
        onPress={markAsRead}
        disabled={disabledMarkButton}
        hitSlop={HIT_SLOP.SIZE10}>
        <View style={[styles.readButton, { borderColor: reactiveColor }]}>
          <ContentText
            size={12}
            weight="500"
            color={reactiveColor}
            lineHeight={16}>
            {messages.button_mark_as_read}
          </ContentText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingRight: 25,
  },
  checkBoxView: {
    paddingHorizontal: 16,
  },
  selectModeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.orange,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
});

export default observer(NotificationScreenActionBar);
