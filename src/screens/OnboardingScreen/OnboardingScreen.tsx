import React, { useCallback, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Screen from 'utils/screen';
import { ROUTE_TABS } from 'routes/names';
import CommonStyles from 'theme/CommonStyles';
import { keyExtractor } from 'constants/default-values';

import styles from './OnboardingScreen.styles';
import useLogic from './OnboardingScreen.logic';
import OnboardingItem from './components/OnboardingItem';
import OnboardingActionControl from './components/OnboardingActionControl';
import Platform from 'utils/platform';

type PropTypes = {};

const OnboardingScreen: React.FC<PropTypes> = () => {
  const { index, setIndex } = useLogic();
  const navigation = useNavigation();
  const scrollRef = useRef<FlatList>(null);
  const renderItem = useCallback(({ item }) => {
    return <OnboardingItem item={item} />;
  }, []);

  const onScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const pageNumber = Math.min(
        Math.max(
          Math.floor(e.nativeEvent.contentOffset.x / Screen.width + 0.5),
          0,
        ),
        DATA.length,
      );
      // console.log('onScrollEnd', pageNumber);
      setIndex(pageNumber);
    },
    [setIndex],
  );

  const scrollNext = useCallback(() => {
    scrollRef.current?.scrollToIndex({
      index: Math.min(DATA.length - 1, index + 1),
    });
  }, [index]);

  const onContinue = () => {
    navigation.navigate(ROUTE_TABS.MAIN_TAB);
  };

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <View style={styles.carouselContainer}>
          <FlatList
            ref={scrollRef}
            horizontal
            pagingEnabled
            data={DATA}
            onMomentumScrollEnd={Platform.isIos ? onScrollEnd : undefined}
            onScroll={Platform.isAndroid ? onScrollEnd : undefined}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.actionContainer}>
          <OnboardingActionControl
            data={DATA}
            index={index}
            onNext={scrollNext}
            onContinue={onContinue}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const DATA = [
  {
    id: uuidv4(),
    image: require('images/pay_stub.png'),
    title: 'See your pay stubs',
    content:
      'See the breakdown of your pay stub and get notified every time you get paid.',
  },
  {
    id: uuidv4(),
    image: require('images/account_info.png'),
    title: 'Edit your account information',
    content:
      'You can now edit your account info like addresses, contact methods from your phone. You can also set up direct deposits and edit tax forms.',
  },
  {
    id: uuidv4(),
    image: require('images/messages.png'),
    title: 'Receive company messages',
    content:
      'Receive and check company messages so you will never miss an anouncement.',
  },
];

export default OnboardingScreen;
