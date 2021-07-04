import React, { memo } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import DateTitle from 'components/Common/DateTitle/DateTitle';
import Space from 'components/Base/Space/Space';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import messages from './PayHistory.messages';
import MoneyValue from 'components/Base/Text/MoneyValue/';
import ContentText from 'components/Base/Text/ContentText/ContentText';
import Colors from 'theme/colors';

interface PropTypes {
  item: {
    date: string;
    take_home: number;
    hours: number;
    gross: number;
  };
}

const PayHistoryItem: React.FC<PropTypes> = memo(
  ({ item = payHistoryItemDefaultProps.item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.contentView}>
          <DateTitle level="h5" date={new Date(item?.date)} />
          <Space height={8} />
          <View style={styles.dataRow}>
            {/* take home  */}
            <View style={styles.dataRowItem}>
              <TitleText level="h5" color={Colors.corban}>
                {messages.take_home}
              </TitleText>
              <ContentText size={16}>
                <MoneyValue value={item.take_home} />
              </ContentText>
            </View>
            {/* hours */}
            <View style={styles.dataRowItem}>
              <TitleText level="h5" color={Colors.corban}>
                {messages.hours}
              </TitleText>
              <ContentText size={16}>{item.hours.toFixed(2)}</ContentText>
            </View>
            {/* gross */}
            <View style={styles.dataRowItem}>
              <TitleText level="h5" color={Colors.corban}>
                {messages.gross}
              </TitleText>
              <ContentText size={16}>
                <MoneyValue value={item.gross} />
              </ContentText>
            </View>
          </View>
        </View>
        <Image
          source={require('images/chevron_right_corban.png')}
          style={styles.iconImage}
        />
      </View>
    );
  },
);

const payHistoryItemDefaultProps = {
  item: {
    date: new Date().toString(),
    take_home: 22000.01,
    hours: 180.0,
    gross: 2400,
  },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 18,
  },
  contentView: {
    flex: 1,
    alignItems: 'flex-start',
    // paddingHorizontal: 16,
  },
  dataRow: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
  dataRowItem: {
    flex: 1,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default PayHistoryItem;
