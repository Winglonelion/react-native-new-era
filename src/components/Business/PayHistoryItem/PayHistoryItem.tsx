import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Colors from 'theme/colors';
import Space from 'components/Base/Space/Space';
import DateTitle from 'components/Common/DateTitle';
import TitleText from 'components/Base/Text/TitleText';
import MoneyValue from 'components/Base/Text/MoneyValue/';
import ContentText from 'components/Base/Text/ContentText';
import ContentLoaderLine from 'components/Base/ContentLoader/BuildIn/ContentLoaderLine';
import messages from './PayHistoryItem.messages';

export interface PropTypes {
  item?: {
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
          <ContentLoaderLine
            width={73}
            height={18}
            ready={typeof item.date === 'string'}>
            <DateTitle level="h5" date={new Date(item?.date ?? '')} />
          </ContentLoaderLine>
          <Space height={8} />
          <View style={styles.dataRow}>
            {/* take home  */}
            <View style={styles.dataRowItem}>
              <TitleText level="h5" color={Colors.corban}>
                {messages.take_home}
              </TitleText>
              <ContentLoaderLine
                width={80}
                height={22}
                ready={typeof item.take_home === 'number'}>
                <ContentText size={16}>
                  <MoneyValue value={item.take_home} />
                </ContentText>
              </ContentLoaderLine>
            </View>
            {/* hours */}
            <View style={styles.dataRowItem}>
              <TitleText level="h5" color={Colors.corban}>
                {messages.hours}
              </TitleText>
              <ContentLoaderLine
                width={80}
                height={22}
                ready={typeof item.hours === 'number'}>
                <ContentText size={16}>{item.hours?.toFixed(2)}</ContentText>
              </ContentLoaderLine>
            </View>
            {/* gross */}
            <View style={styles.dataRowItem}>
              <TitleText level="h5" color={Colors.corban}>
                {messages.gross}
              </TitleText>
              <ContentLoaderLine
                width={80}
                height={22}
                ready={typeof item.gross === 'number'}>
                <ContentText size={16}>
                  <MoneyValue value={item.gross} />
                </ContentText>
              </ContentLoaderLine>
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
    date: undefined,
    take_home: undefined,
    hours: undefined,
    gross: undefined,
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
