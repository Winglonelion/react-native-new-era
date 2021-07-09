import React, { memo } from 'react';
import ContentLoader, { Rect } from '../index';
import { IContentLoaderProps } from '../ContentLoader.types';
import { LOADING_SPEED } from './config';

export interface PropTypes extends IContentLoaderProps {
  ready?: boolean;
  children: any;
  radius?: number;
  offsetX?: number;
  offsetY?: number;
  loadingWidth?: number;
  loadingHeight?: number;
}

const ContentLoaderLine: React.FC<PropTypes> = memo(props => {
  const {
    children,
    ready = false,
    radius = 4,
    offsetX = 0,
    offsetY = 0,
    loadingHeight,
    loadingWidth,
    ...rest
  } = props;

  if (ready) return children;

  return (
    <ContentLoader
      speed={LOADING_SPEED}
      width={props.width ?? 100}
      height={props.height ?? 30}
      viewBox={`0 0 ${props.width ?? 100} ${props.height ?? 30}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...rest}>
      <Rect
        x={offsetX}
        y={offsetY}
        rx={radius}
        ry={radius}
        width={loadingWidth ?? props.width ?? 100}
        height={loadingHeight ?? props.height ?? 30}
      />
    </ContentLoader>
  );
});

export default ContentLoaderLine;
