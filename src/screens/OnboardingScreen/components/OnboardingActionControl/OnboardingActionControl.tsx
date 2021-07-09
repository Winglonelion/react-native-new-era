import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'components/Theme/Button/ActionButton';
import CommonStyles from 'theme/CommonStyles';
import DotIndicator from 'components/Theme/Indicator/DotIndicator';
import { OnboardingItemTypes } from 'screens/OnboardingScreen/OnboardingScreen.types';
import Button from 'components/Base/Button';
import messages from './OnboardingActionControl.messages';
import Colors from 'theme/colors';

interface PropTypes {
  index: number;
  data: OnboardingItemTypes[];
  onSkip?: () => unknown;
  onNext?: () => unknown;
  onContinue?: () => unknown;
}

const OnboardingActionControl: React.FC<PropTypes> = ({
  index = 0,
  data = [],
  onSkip,
  onNext,
  onContinue,
}) => {
  const finalStep = index >= data.length - 1;
  return (
    <View style={styles.container}>
      {!finalStep && (
        <>
          <ActionButton
            text={messages.skip}
            onPress={onSkip}
            tint={Colors.lightBrown}
          />
          <View style={CommonStyles.row}>
            {data.map((item, dotIndex) => (
              <DotIndicator
                key={`dot_${item.id}`}
                isActive={index === dotIndex}
              />
            ))}
          </View>
          <ActionButton text={messages.next} onPress={onNext} />
        </>
      )}
      {finalStep && <Button text={messages.continue} onPress={onContinue} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
});

export default OnboardingActionControl;
