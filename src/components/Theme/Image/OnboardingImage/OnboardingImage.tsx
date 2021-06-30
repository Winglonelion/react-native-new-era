import React from 'react';
import { Image, ImageProps } from 'react-native';
import styles from './OnboardingImage.styles';

interface PropTypes extends ImageProps {}

const OnboardingImage: React.FC<PropTypes> = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};

export default OnboardingImage;
