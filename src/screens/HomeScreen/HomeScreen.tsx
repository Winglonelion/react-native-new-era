import React, { useCallback } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { observer } from 'mobx-react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import ROUTES from 'routes/names';
import { navigateTo } from 'routes/actions';
import CommonStyles from 'theme/CommonStyles';
import DateTitle from 'components/Common/DateTitle';
import PayHistoryOverView from 'components/Business/PayHistory';

import PaidOverview from './components/PaidOverview';
import homeScreenStore from './HomeScreen.store';
import useHomeScreenLogic from './HomeScreen.logic';

const HomeScreen: React.FC = () => {
  const { reloadHomeData } = useHomeScreenLogic();

  const onPressPaidOverview = useCallback(() => {
    navigateTo(ROUTES.PAID_DETAIL_SCREEN, {
      data: homeScreenStore.paidOverViewData,
    });
  }, []);

  return (
    <View style={CommonStyles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={homeScreenStore.homeLoading}
            onRefresh={reloadHomeData}
          />
        }>
        <DateTitle />
        <TouchableWithoutFeedback
          disabled={homeScreenStore.loadingPaidOverView}
          onPress={onPressPaidOverview}>
          <PaidOverview
            overviewData={homeScreenStore.paidOverViewData}
            loading={homeScreenStore.homeLoading}
          />
        </TouchableWithoutFeedback>
        <PayHistoryOverView
          overviewData={homeScreenStore.paidHistoryOverViewData}
          loading={homeScreenStore.homeLoading}
        />
      </ScrollView>
    </View>
  );
};

export default observer(HomeScreen);
