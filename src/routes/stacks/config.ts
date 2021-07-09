import Platform from 'utils/platform';
import { Edge } from 'react-native-safe-area-context';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack';

export const CONTENT_STYLE = Platform.isAndroid
  ? {
      // paddingTop: Screen.statusBarH,
      // marginTop: (Screen.statusBarH || 0) * 2,
    }
  : {};

export const SAFE_AREA_EDGES: Edge[] = Platform.isAndroid
  ? []
  : ['left', 'top', 'right'];

export const STACK_ANIMATION: NativeStackNavigationOptions['stackAnimation'] =
  Platform.isAndroid ? 'slide_from_right' : undefined;

export const HEADER_TRANSLUCENT = Platform.isAndroid ? false : false;
