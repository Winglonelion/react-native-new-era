import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import SalaryOverview from 'components/Business/SalaryOverview';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from 'routes/stacks/RootStack.types';
import { ROUTES_TYPES } from 'routes/names';
import CommonStyles from 'theme/CommonStyles';
import DateTitle from 'components/Common/DateTitle';
import Space from 'components/Base/Space';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import Screen from 'utils/screen';
import { GetPaidOverViewResponse } from 'api/paid/paid.api.types';
import Colors from 'theme/colors';
import { FontFamily } from 'theme/CommonFonts';
import PaidDetailRow from './components/PaidDetailRow';
import usePaidDetailScreenLogic from './PaidDetailScreen.logic';

export type ScreenRouteProp = RouteProp<
  RootStackParamsList,
  ROUTES_TYPES.PAID_DETAIL_SCREEN
>;
interface PropTypes {
  route: ScreenRouteProp;
}

type TabProps = SceneRendererProps & {
  route: {
    key: string;
    title: string;
    overviewData: GetPaidOverViewResponse;
  };
};

type TabBarProps = SceneRendererProps & {
  navigationState: any;
};

const PaidDetailScreen: React.FC<PropTypes> = ({ route }) => {
  const { data: overviewData } = route.params;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'current_paid', title: 'Current', overviewData },
    { key: 'ytd_paid', title: 'YTD', test: 'test2', overviewData },
  ]);
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.flex1}>
        <Space height={8} />
        <DateTitle />
        <Space height={16} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: Screen.width }}
          renderTabBar={renderTabBar}
          swipeEnabled={false}
        />
      </View>
    </View>
  );
};

const CurrentPaid: React.FC<TabProps> = memo(({ route }) => {
  const { overviewData } = route;
  const { expandGross, toggleExpandGross } = usePaidDetailScreenLogic();
  return (
    <View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Space height={20} />
        <View style={styles.overviewContainer}>
          <SalaryOverview overviewData={route.overviewData} />
        </View>
        {/* gross data */}
        <View style={styles.shadowBox}>
          <TouchableWithoutFeedback onPress={toggleExpandGross}>
            <View style={styles.contentDetailRow}>
              <PaidDetailRow type="gross" value={overviewData.gross} />
              <PaidDetailRow
                height={expandGross ? 40 : 0.01}
                backgroundColor={Colors.greyBrown}
                icon="info"
                iconColor={Colors.white}
                type={'regular_pay'}
                value={overviewData.regular}
              />
              <PaidDetailRow
                height={expandGross ? 40 : 0.01}
                backgroundColor={Colors.greyBrown}
                icon="info"
                iconColor={Colors.white}
                type={'over_time'}
                value={overviewData.over_time}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        {/* detail data */}
        <View style={styles.shadowBox}>
          <View style={styles.contentDetailRow}>
            {overviewData.detail.map((detail, index) => {
              return (
                <PaidDetailRow
                  important={route.overviewData.detail.length === index + 1}
                  key={detail.type}
                  type={detail.type}
                  value={detail.value}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

const YTDPaid: React.FC<TabProps> = memo(({ route }) => {
  const { overviewData } = route;
  return (
    <View>
      <ScrollView bounces={false}>
        <Space height={20} />
        <View style={styles.overviewContainer}>
          <SalaryOverview overviewData={route.overviewData} />
        </View>
        {/* gross data */}
        <View style={styles.shadowBox}>
          <View style={styles.contentDetailRow}>
            <PaidDetailRow type="gross" value={overviewData.gross} />
          </View>
        </View>
        {/* detail data */}
        <View style={styles.shadowBox}>
          <View style={styles.contentDetailRow}>
            {overviewData.detail.map((detail, index) => {
              return (
                <PaidDetailRow
                  important={route.overviewData.detail.length === index + 1}
                  key={detail.type}
                  type={detail.type}
                  value={detail.value}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

const renderTabBar = (props: TabBarProps) => {
  return (
    <View style={styles.tabBarContainer}>
      <TabBar
        {...props}
        indicatorStyle={styles.tabBarIndicator}
        activeColor={Colors.brown}
        inactiveColor={Colors.uncheck}
        indicatorContainerStyle={styles.indicatorContainer}
        labelStyle={styles.tabBarLabel}
        style={styles.tabBarStyle}
      />
    </View>
  );
};

const renderScene = SceneMap({
  current_paid: CurrentPaid,
  ytd_paid: YTDPaid,
});

const styles = StyleSheet.create({
  overviewContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingRight: 20,
    paddingVertical: 25,
    paddingBottom: 40,
    borderRadius: 8,
  },
  indicatorContainer: {
    width: '80%',
    // left should equal to (100 - width) / 4
    left: '5%',
  },
  tabBarContainer: {
    width: '60%',
    alignSelf: 'center',
  },
  tabBarStyle: { backgroundColor: 'transparent' },
  tabBarIndicator: {
    backgroundColor: Colors.brown,
  },
  tabBarLabel: {
    textTransform: 'capitalize',
    fontFamily: FontFamily.Helvetica,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.1,
    fontWeight: '500',
  },

  shadowBox: {
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  contentDetailRow: {
    width: '100%',
    backgroundColor: Colors.warnLight,
    borderRadius: 8,
    overflow: 'hidden',
    ...CommonStyles.shadow,
  },
});

export default PaidDetailScreen;
