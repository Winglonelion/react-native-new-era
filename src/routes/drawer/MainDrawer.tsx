import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './DrawerContent';
import AuthorizedStack from 'routes/stacks/AuthorizedStack';
import ROUTES from 'routes/names';
import Colors from 'theme/colors';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      lazy
      drawerStyle={{
        backgroundColor: Colors.dark,
      }}
      screenOptions={
        {
          // headerShown: true,
        }
      }
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName={ROUTES.AUTHORIZED_STACK}>
      <Drawer.Screen
        name={ROUTES.AUTHORIZED_STACK}
        component={AuthorizedStack}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
