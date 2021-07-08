import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import messages from './SalaryOverview.messages';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import PieChart from 'components/Common/Chart/PieChart';
import ContentLoaderLine from 'components/Base/ContentLoader/BuildIn/ContentLoaderLine';
import MoneyValue from 'components/Base/Text/MoneyValue/MoneyValue';
import ContentLoaderCircle from 'components/Base/ContentLoader/BuildIn/ContentLoaderCircle';
import { GetPaidOverViewResponse } from 'api/paid/paid.api.types';
import { capitalize } from 'lodash';
import { mapPieColor } from 'utils/business/chart';

interface PropTypes {
  overviewData?: GetPaidOverViewResponse;
  loading?: boolean;
}

const SalaryOverview: React.FC<PropTypes> = memo(
  ({ overviewData, loading }) => {
    const data = rebuildData(overviewData);
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
  },
);

function rebuildData(data?: GetPaidOverViewResponse) {
  if (!data) return undefined;
  return {
    take_home: data.take_home,
    gross: data.gross,
    hours: data.hours,
    rate: data.rate,
    dataChart: data.detail.map(({ type, value }) => ({
      key: capitalize(type),
      value,
      svg: { fill: mapPieColor(type) },
    })),
  };
}

const styles = StyleSheet.create({
  contentRow: {
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  dataRow: {
    marginBottom: 8,
  },
  chartBox: {
    justifyContent: 'center',
  },
  chart: {
    height: 150,
  },
});

export default SalaryOverview;
