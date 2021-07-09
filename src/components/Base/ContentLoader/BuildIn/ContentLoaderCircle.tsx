import React, { memo } from 'react';
import ContentLoader, { Circle } from '../index';
import { IContentLoaderProps } from '../ContentLoader.types';
import { LOADING_SPEED } from './config';

export interface PropTypes extends IContentLoaderProps {
  ready?: boolean;
  children: any;
  offsetX?: number;
  offsetY?: number;
  size: number;
}

const ContentLoaderCircle: React.FC<PropTypes> = memo(props => {
  const {
    children,
    ready = false,
    size = 100,
    offsetX,
    offsetY,
    ...rest
  } = props;

  if (ready) return children;

  return (
    <ContentLoader
      speed={LOADING_SPEED}
      width={props.width ?? 100}
      height={props.height ?? 100}
      viewBox={`0 0 ${props.width || 100} ${props.height || 100}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...rest}>
      <Circle
        cx={offsetX ?? size / 2}
        cy={offsetY ?? size / 2}
        r={(size ?? props.width ?? 100) / 2}
      />
    </ContentLoader>
  );
});

export default ContentLoaderCircle;
