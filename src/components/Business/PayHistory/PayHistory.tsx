import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import TitleText from 'components/Base/Text/TitleText';
import { GetPaidHistoryOverViewResponse } from 'api/paid/paid.api.types';
import PayHistoryItem from '../PayHistoryItem';
import messages from './PayHistory.messages';

export interface PropTypes {
  loading?: boolean;
  overviewData?: GetPaidHistoryOverViewResponse;
}

const PayHistoryOverView: React.FC<PropTypes> = memo(
  ({ loading, overviewData: overviewData }) => {
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
          {loading ? (
            <>
              <PayHistoryItem key="place_holder_1" />
              <PayHistoryItem key="place_holder_2" />
              <PayHistoryItem key="place_holder_3" />
            </>
          ) : (
            overviewData?.map(item => (
              <PayHistoryItem key={item.date} item={item} />
            ))
          )}
          {/* contents */}
        </View>
      </View>
    );
  },
);

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
