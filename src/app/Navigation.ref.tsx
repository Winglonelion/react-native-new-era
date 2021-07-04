import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

let ready = false;

export function setReady(value: boolean) {
  ready = !!value;
}

export function isNavigationReady() {
  return ready;
}

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef<NavigationContainerRef>();
