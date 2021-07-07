import { PressEvent } from 'types/events';
import { TextInputProps } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { NotificationItem } from 'screens/NotificationScreen/NotificationScreen.store';

export interface RootStackParamsList extends ParamListBase {
  LOGIN: undefined;
  REGISTER: undefined;

  TEXT_DATA_UPDATE_SCREEN: {
    title?: string;
    onComplete?: (text: string) => void;
    onCancel?: PressEvent;
    validator?: (text: string) => { error?: Error };
    inputProps?: TextInputProps;
  };
  NOTIFICATION_DETAIL_SCREEN: {
    data: NotificationItem;
  };
}
