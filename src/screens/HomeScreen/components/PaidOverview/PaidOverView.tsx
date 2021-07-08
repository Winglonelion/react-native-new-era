import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import messages from './PaidOverview.messages';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import SalaryOverview from 'components/Business/SalaryOverview';
import { observer } from 'mobx-react';
import { GetPaidOverViewResponse } from 'api/paid/paid.api.types';

interface PropTypes {
  overviewData?: GetPaidOverViewResponse;
  loading?: boolean;
}

const PaidOverview: React.FC<PropTypes> = ({ overviewData, loading }) => {
  return (
    <View style={styles.shadowBox}>
      <View style={styles.container}>
        {/* title row */}
        <View style={styles.titleRow}>
          <TitleText level="h2">{messages.pay}</TitleText>
          <Image
            source={require('images/chevron_right_brown.png')}
            style={styles.icon}
          />
        </View>
        <SalaryOverview overviewData={overviewData} loading={loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 15,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingRight: 20,
    paddingVertical: 25,
    paddingBottom: 40,
    backgroundColor: Colors.warnLight,
    borderRadius: 8,
    ...CommonStyles.shadow,
  },
  titleRow: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default observer(PaidOverview);
