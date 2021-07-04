import React from 'react';
import { View, ScrollView } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import DateTitle from 'components/Common/DateTitle/DateTitle';
import SalaryOverview from 'components/Business/SalaryOverview';
import PayHistoryOverView from 'components/Business/PayHistory';
// import styles from './HomeScreen.styles';

type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DateTitle />
        <SalaryOverview />
        <PayHistoryOverView />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
