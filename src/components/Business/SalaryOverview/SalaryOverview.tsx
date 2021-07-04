import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TitleText from 'components/Base/Text/TitleText/TitleText';
import messages from './SalaryOverview.messages';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import PieChart from 'components/Common/Chart/PieChart';

const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
const values = [15, 12, 35, 45, 55];
const colors = ['#6C6F70', '#E28080', '#C0CAB8', '#4FA5AD', '#FF894D'];

const SalaryOverview = () => {
  const data = keys.map((key, index) => {
    return {
      key,
      value: values[index],
      svg: { fill: colors[index] },
      // arc: {
      //   outerRadius: 70 + values[index] + '%',
      //   // padAngle: label === key ? 0.1 : 0,
      // },
      // onPress: () =>
      //   this.setState({ selectedSlice: { label: key, value: values[index] } }),
    };
  });

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
        {/* content row */}
        <View style={styles.contentRow}>
          <View style={CommonStyles.flex1}>
            {/* take home */}
            <View style={styles.dataRow}>
              <TitleText level="h5" color={Colors.lightBrown}>
                {messages.take_home}
              </TitleText>
              <TitleText level="h1">{'$1,800.01'}</TitleText>
            </View>
            {/* gross */}
            <View style={styles.dataRow}>
              <TitleText level="h5" color={Colors.lightBrown}>
                {messages.gross}
              </TitleText>
              <TitleText level="h3">{'$2400.00'}</TitleText>
            </View>
            <View style={[styles.dataRow, CommonStyles.row]}>
              <View style={CommonStyles.flex1}>
                {/* hours */}
                <TitleText level="h5" color={Colors.lightBrown}>
                  {messages.hours}
                </TitleText>
                <TitleText level="h3">{'80.00'}</TitleText>
              </View>
              <View style={CommonStyles.flex1}>
                {/* rate */}
                <TitleText level="h5" color={Colors.lightBrown}>
                  {messages.rate}
                </TitleText>
                <TitleText level="h3">{'$30.00'}</TitleText>
              </View>
            </View>
          </View>
          <View style={[CommonStyles.flex1, styles.chartBox]}>
            <PieChart
              style={styles.chart}
              outerRadius={'100%'}
              innerRadius={'65%'}
              padAngle={0}
              startAngle={-20}
              data={data}
            />
          </View>
          <View />
        </View>
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
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default SalaryOverview;
