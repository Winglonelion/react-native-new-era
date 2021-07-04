import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import messages from './PayHistory.messages';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import PayHistoryItem from '../PayHistoryItem/PayHistoryItem';

const PayHistoryOverView = () => {
  return (
    <View style={styles.shadowBox}>
      <View style={styles.container}>
        {/* title row */}
        <View style={styles.titleRow}>
          <TitleText level="h2">{messages.pay_history}</TitleText>
          <Image
            source={require('images/chevron_right_corban.png')}
            style={styles.icon}
          />
        </View>
        {/* contents */}
        <PayHistoryItem />
        <PayHistoryItem />
        <PayHistoryItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    width: '100%',
    paddingVertical: 8,
    paddingTop: 2,
    paddingHorizontal: 8,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingRight: 20,
    paddingVertical: 25,
    paddingBottom: 40,
    backgroundColor: Colors.coldLight,
    borderRadius: 8,
    ...CommonStyles.shadow,
  },
  titleRow: {
    height: 40,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default PayHistoryOverView;
