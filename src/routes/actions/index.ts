import { isNavigationReady, navigationRef } from 'app/Navigation.ref';
import { DrawerActions } from '@react-navigation/native';

export function navigate(name: string, params: Object) {
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
