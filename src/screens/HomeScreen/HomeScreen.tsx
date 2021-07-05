import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import DateTitle from 'components/Common/DateTitle/DateTitle';
import PayHistoryOverView from 'components/Business/PayHistory';
import PaidOverview from './components/PaidOverview';
import useHomeScreenLogic from './HomeScreen.logic';
import { observer } from 'mobx-react';
import homeScreenStore from './HomeScreen.store';
// import styles from './HomeScreen.styles';
type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  const { reloadHomeData } = useHomeScreenLogic();
  return (
    <View style={CommonStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={homeScreenStore.homeLoading}
            onRefresh={reloadHomeData}
          />
        }>
        <DateTitle />
        <PaidOverview
          overViewData={homeScreenStore.paidOverViewData}
          loading={homeScreenStore.homeLoading}
        />
        <PayHistoryOverView
          overViewData={homeScreenStore.paidHistoryOverViewData}
          loading={homeScreenStore.homeLoading}
        />
      </ScrollView>
    </View>
  );
};

export default observer(HomeScreen);
