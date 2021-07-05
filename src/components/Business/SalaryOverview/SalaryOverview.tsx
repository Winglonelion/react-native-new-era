import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import messages from './SalaryOverview.messages';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import PieChart from 'components/Common/Chart/PieChart';
import ContentLoaderLine from 'components/Base/ContentLoader/BuildIn/ContentLoaderLine';
import MoneyValue from 'components/Base/Text/MoneyValue/MoneyValue';
import ContentLoaderCircle from 'components/Base/ContentLoader/BuildIn/ContentLoaderCircle';

interface PropTypes {
  data?: {
    take_home: number;
    hours: number;
    gross: number;
    rate: number;
    dataChart: any[];
  };
  loading?: boolean;
}

const SalaryOverview: React.FC<PropTypes> = memo(({ data, loading }) => {
  return (
    <View style={styles.contentRow}>
      <View style={CommonStyles.flex1}>
        {/* take home */}
        <View style={styles.dataRow}>
          <TitleText level="h5" color={Colors.lightBrown}>
            {messages.take_home}
          </TitleText>
          <ContentLoaderLine ready={!loading} width={150} height={30}>
            <TitleText level="h1">
              <MoneyValue value={data?.take_home} />
            </TitleText>
          </ContentLoaderLine>
        </View>
        {/* gross */}
        <View style={styles.dataRow}>
          <TitleText level="h5" color={Colors.lightBrown}>
            {messages.gross}
          </TitleText>
          <ContentLoaderLine ready={!loading} width={150} height={22}>
            <TitleText level="h3">
              <MoneyValue value={data?.gross} />
            </TitleText>
          </ContentLoaderLine>
        </View>
        <View style={[styles.dataRow, CommonStyles.row]}>
          <View style={CommonStyles.flex1}>
            {/* hours */}
            <TitleText level="h5" color={Colors.lightBrown}>
              {messages.hours}
            </TitleText>
            <ContentLoaderLine ready={!loading} width={76} height={22}>
              <TitleText level="h3">{data?.hours}</TitleText>
            </ContentLoaderLine>
          </View>
          <View style={CommonStyles.flex1}>
            {/* rate */}
            <TitleText level="h5" color={Colors.lightBrown}>
              {messages.rate}
            </TitleText>
            <ContentLoaderLine ready={!loading} width={76} height={22}>
              <TitleText level="h3">
                <MoneyValue value={data?.rate} />
              </TitleText>
            </ContentLoaderLine>
          </View>
        </View>
      </View>
      <View style={[CommonStyles.flex1, styles.chartBox]}>
        <ContentLoaderCircle
          ready={!loading}
          size={150}
          width={150}
          height={150}>
          <PieChart
            style={styles.chart}
            outerRadius={'100%'}
            innerRadius={'65%'}
            padAngle={0}
            startAngle={-20}
            data={data?.dataChart}
          />
        </ContentLoaderCircle>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  contentRow: {
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  dataRow: {
    marginBottom: 8,
    // flexDirection: 'row',
  },
  chartBox: {
    justifyContent: 'center',
  },
  chart: {
    height: 150,
  },
});

export default SalaryOverview;
