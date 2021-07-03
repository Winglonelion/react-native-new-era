import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './DrawerContent';
import AuthorizedStack from 'routes/stacks/AuthorizedStack';
import ROUTES from 'routes/names';
import Colors from 'theme/colors';
import SettingScreen from 'screens/SettingScreen';
import FeedbackScreen from 'screens/FeedbackScreen';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      lazy
      drawerStyle={{
        backgroundColor: Colors.dark,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName={ROUTES.AUTHORIZED_STACK}>
      <Drawer.Screen
        name={ROUTES.AUTHORIZED_STACK}
        component={AuthorizedStack}
      />
      <Drawer.Screen name={ROUTES.SETTING_SCREEN} component={SettingScreen} />
      <Drawer.Screen name={ROUTES.FEEDBACK_SCREEN} component={FeedbackScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
