import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { observer } from 'mobx-react';

import Colors from 'theme/colors';
import Space from 'components/Base/Space';
import Button from 'components/Base/Button';
import CommonStyles from 'theme/CommonStyles';
import TitleText from 'components/Base/Text/TitleText';
import ContentText from 'components/Base/Text/ContentText';
import OnboardingImage from 'components/Theme/Image/OnboardingImage';

import messages from './LoginScreen.messages';
import styles from './LoginScreen.styles';
import useLogic from './LoginScreen.logic';

type PropTypes = {};

const LoginScreen: React.FC<PropTypes> = () => {
  const { loading, onPressLogin } = useLogic();
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={[CommonStyles.flex1, CommonStyles.alignCenter]}>
        <View style={styles.topView}>
          <TitleText level="h2">{messages.login_title}</TitleText>
          <OnboardingImage
            source={require('images/amico.png')}
            style={styles.coverImage}
          />
        </View>

        <View style={styles.contentView}>
          <TitleText level="h2" color={Colors.brown}>
            {messages.login_message}
          </TitleText>
          <Space height={5} />
          <ContentText size={16} color={Colors.lightBrown}>
            {messages.login_content}
          </ContentText>
          <View style={styles.buttonContainer}>
            <Button
              round
              hideContentWhileLoading
              text={messages.button_text}
              onPress={onPressLogin}
              loading={loading}
            />
            <Image
              style={styles.upArrowImage}
              source={require('images/up.png')}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default observer(LoginScreen);
