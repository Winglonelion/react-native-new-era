import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from 'components/Base/Text/TitleText';
import messages from './SettingScreen.messages';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import SwitchDataRow from 'components/Common/SwitchDataRow';
import useSettingScreenLogic from './SettingScreen.logic';
import DetailDataRow from 'components/Common/DetailDataRow/DetailDataRow';

const SettingScreen = () => {
  const {
    faceId,
    setFaceId,
    messageActive,
    setMessageActive,
    receivePaymentActive,
    setReceivePaymentActive,
  } = useSettingScreenLogic();
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TitleText level="h4" color={Colors.brown}>
          {messages.title_notification}
        </TitleText>
      </View>
      {/* noti setting */}
      <View style={styles.contentRow}>
        <SwitchDataRow
          title={messages.menu_receive_payment}
          isEnabled={receivePaymentActive}
          onChange={setReceivePaymentActive}
        />
        <View style={CommonStyles.line} />
        <SwitchDataRow
          title={messages.menu_message}
          isEnabled={messageActive}
          onChange={setMessageActive}
        />
      </View>

      <View style={styles.titleRow}>
        <TitleText level="h4" color={Colors.brown}>
          {messages.title_security}
        </TitleText>
      </View>
      {/* security setting */}
      <View style={styles.contentRow}>
        <SwitchDataRow
          title={messages.menu_face_id}
          isEnabled={faceId}
          onChange={setFaceId}
        />
        <View style={CommonStyles.line} />
        <DetailDataRow
          title={messages.menu_pin_code}
          strongChevron
          content={null}
          onPress={() => null}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  titleRow: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  contentRow: {
    ...CommonStyles.menuItem,
    backgroundColor: Colors.white,
  },
});

export default SettingScreen;
