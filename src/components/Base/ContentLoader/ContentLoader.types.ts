import { SvgProps } from 'react-native-svg';

export interface IContentLoaderProps extends SvgProps {
  animate?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  rtl?: boolean;
  speed?: number;
  interval?: number;
  uniqueKey?: string;
}
