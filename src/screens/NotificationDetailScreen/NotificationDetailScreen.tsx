import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ROUTES_TYPES } from 'routes/names';
import { RootStackParamsList } from 'routes/stacks/RootStack.types';
import CommonStyles from 'theme/CommonStyles';
import TitleText from 'components/Base/Text/TitleText';
import ContentText from 'components/Base/Text/ContentText';
import { distanceTime } from 'utils/date';
import Colors from 'theme/colors';
import Space from 'components/Base/Space';

export type ScreenRouteProp = RouteProp<
  RootStackParamsList,
  ROUTES_TYPES.NOTIFICATION_DETAIL_SCREEN
>;
interface PropTypes {
  route: ScreenRouteProp;
}

const NotificationDetailScreen: React.FC<PropTypes> = ({ route }) => {
  const noti = route.params.data;
  useEffect(() => {
    noti && noti.readMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={CommonStyles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.timeBox}>
            <ContentText size={12} textAlign="right" color={Colors.lightBrown}>
              {distanceTime(new Date(noti.time))}
            </ContentText>
          </View>
          <View style={styles.titleBox}>
            <TitleText level="h3">{noti.title}</TitleText>
          </View>
          <TitleText level="h4">{'From: ' + noti.sender.name}</TitleText>
          <Space height={16} />
          <ContentText>{noti.message}</ContentText>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  titleBox: {
    paddingBottom: 16,
    flexDirection: 'row',
  },
  timeBox: {
    // paddingVertical: 5,
  },
});

export default NotificationDetailScreen;
