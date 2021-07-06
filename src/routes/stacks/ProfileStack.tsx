import React from 'react';
import { observer } from 'mobx-react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ROUTES from 'routes/names';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import { toggleDrawer, goBack } from 'routes/actions';
import ProfileScreen from 'screens/ProfileScreen';
import PersonalInfoScreen from 'screens/PersonalInfoScreen';
import TextDataUpdateScreen, {
  TextDataUpdateScreenRouteProp,
} from 'screens/TextDataUpdateScreen';
import ContentText from 'components/Base/Text/ContentText/ContentText';
import TextDataUpdateScreenStore from 'screens/TextDataUpdateScreen/TextDataUpdateScreen.store';

const Stack = createNativeStackNavigator<Record<string, never>>();

const ProfileStack = () => {
  return (
    <SafeAreaView
      edges={['left', 'top', 'right']}
      style={CommonStyles.container}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerHideShadow: true,
          headerTintColor: Colors.lightBrown,
        }}>
        <Stack.Screen
          options={{
            title: 'Profile',
            headerLeft: renderMenuBtn,
          }}
          name={ROUTES.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            title: 'Personal Info',
          }}
          name={ROUTES.PERSONAL_INFO_SCREEN}
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          options={textDataOptions}
          name={ROUTES.TEXT_DATA_UPDATE_SCREEN}
          component={TextDataUpdateScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

const textDataOptions = ({
  route,
}: {
  route: TextDataUpdateScreenRouteProp;
}) => {
  return {
    title: route.params.title,
    headerRight: () => {
      if (!route.params.onComplete) return null;
      const submit = () => {
        const { onComplete } = route.params;
        const currentStore = TextDataUpdateScreenStore.getCurrentStore();
        const { ok, error } = currentStore.validate(route.params.validator);

        if (!error && ok) {
          onComplete && onComplete(currentStore.text);
          goBack();
        } else {
          currentStore.setError(error?.message || 'unknown');
          currentStore.onError();
        }
      };
      return (
        <TouchableWithoutFeedback onPress={submit}>
          <View>
            <ContentText size={16} color={Colors.orange}>
              Done
            </ContentText>
          </View>
        </TouchableWithoutFeedback>
      );
    },
  };
};

const renderMenuBtn = () => (
  <TouchableWithoutFeedback onPress={toggleDrawer}>
    <View style={styles.menuButton}>
      <Image style={styles.menuImage} source={require('images/menu.png')} />
    </View>
  </TouchableWithoutFeedback>
);

export default observer(ProfileStack);
