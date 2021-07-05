import * as React from 'react';

import { Circle, Rect } from 'react-native-svg';
import { IContentLoaderProps } from '../ContentLoader.types';
import NativeSvg from '../Svg';

const ReactContentLoaderFacebook: React.FC<IContentLoaderProps> = props => (
  <NativeSvg viewBox="0 0 476 124" width={476} height={124} {...props}>
    <Rect x="48" y="8" width="88" height="6" rx="3" />
    <Rect x="48" y="26" width="52" height="6" rx="3" />
    <Rect x="0" y="56" width="410" height="6" rx="3" />
    <Rect x="0" y="72" width="380" height="6" rx="3" />
    <Rect x="0" y="88" width="178" height="6" rx="3" />
    <Circle cx="20" cy="20" r="20" />
  </NativeSvg>
);

export default ReactContentLoaderFacebook;
