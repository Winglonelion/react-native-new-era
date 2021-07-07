import { isNavigationReady, navigationRef } from 'app/Navigation.ref';
import { DrawerActions } from '@react-navigation/native';
import { RootStackParamsList } from 'routes/stacks/RootStack.types';

export function navigateTo<T>(
  name: string,
  params?: RootStackParamsList[typeof name],
) {
  if (isNavigationReady() && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function toggleDrawer() {
  if (isNavigationReady() && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(DrawerActions.toggleDrawer());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (isNavigationReady() && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.canGoBack() && navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
