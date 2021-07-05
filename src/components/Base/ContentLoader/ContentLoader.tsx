import * as React from 'react';
import { Circle, Path, Rect } from 'react-native-svg';

import { IContentLoaderProps } from './ContentLoader.types';
import ReactContentLoaderFacebook from './presets/FacebookStyle';
import NativeSvg from './Svg';

const ContentLoader: React.FC<IContentLoaderProps> = props =>
  props.children ? (
    <NativeSvg {...props} />
  ) : (
    <ReactContentLoaderFacebook {...props} />
  );

export { Circle, Rect, Path };

export default ContentLoader;
