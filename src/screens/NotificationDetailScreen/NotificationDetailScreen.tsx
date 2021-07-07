import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ROUTES_TYPES } from 'routes/names';
import { RootStackParamsList } from 'routes/stacks/RootStack.types';

export type ScreenRouteProp = RouteProp<
  RootStackParamsList,
  ROUTES_TYPES.NOTIFICATION_DETAIL_SCREEN
>;
interface PropTypes {
  route: ScreenRouteProp;
}

const NotificationDetailScreen = () => {
  return (
    <View>
      <Text />
    </View>
  );
};

export default NotificationDetailScreen;
