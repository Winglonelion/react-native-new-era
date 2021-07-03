import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from 'utils/screen';
import Colors from 'theme/colors';
import CommonWidths from 'theme/CommonWidths';
import CommonHeights from 'theme/CommonHeights';

import Space from 'components/Base/Space';
import TitleText from 'components/Base/Text/TitleText';
import ContentText from 'components/Base/Text/ContentText';
import OnboardingImage from 'components/Theme/Image/OnboardingImage';

import { OnboardingItemTypes } from '../../OnboardingScreen.types';

interface PropTypes {
  item: OnboardingItemTypes;
}

const OnboardingItem: React.FC<PropTypes> = memo(({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <OnboardingImage source={item.image} />
      </View>
      <View style={styles.contentContainer}>
        <TitleText level="h2" color={Colors.brown}>
          {item.title}
        </TitleText>
        <Space height={5} />
        <ContentText color={Colors.lightBrown}>{item.content}</ContentText>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Screen.width,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 4.5,
    justifyContent: 'flex-end',
    paddingBottom: CommonHeights.res40,
  },
  contentContainer: {
    width: '100%',
    flex: 2,
    justifyContent: 'flex-start',
    paddingHorizontal: CommonWidths.res45,
  },
});

export default OnboardingItem;
