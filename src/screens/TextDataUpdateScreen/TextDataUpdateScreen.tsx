import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from 'routes/stacks/RootStack';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack';
import { ROUTES_TYPES } from 'routes/names';
import useTextDataUpdateScreenLogic from './TextDataUpdateScreen.logic';
import Colors from 'theme/colors';
import CommonStyles from 'theme/CommonStyles';
import { FontFamily } from 'theme/CommonFonts';
import { observer } from 'mobx-react';
import ContentText from 'components/Base/Text/ContentText/ContentText';

export type ScreenRouteProp = RouteProp<
  RootStackParamsList,
  ROUTES_TYPES.TEXT_DATA_UPDATE_SCREEN
>;
interface PropTypes {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: ScreenRouteProp;
}

const TextDataUpdateScreen: React.FC<PropTypes> = ({ route }) => {
  const { inputProps = {} } = route.params;
  const { setText, clearText, error, clearError, inputRef, showClearButton } =
    useTextDataUpdateScreenLogic(route.key);

  console.log('render TextUp', showClearButton);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          {...inputProps}
          ref={inputRef}
          style={styles.textInput}
          autoFocus
          onChangeText={setText}
          clearButtonMode="never"
          onFocus={clearError}
          blurOnSubmit
        />
        <View style={styles.clearBox}>
          {showClearButton && (
            <TouchableOpacity onPress={clearText}>
              <Image
                source={require('images/clear_brown.png')}
                style={styles.iconClear}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.errorBox}>
        {!!error && (
          <ContentText size={12} color={Colors.error}>
            {error}
          </ContentText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    flex: 1,
    fontSize: 16,
    fontFamily: FontFamily.Helvetica,
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    ...CommonStyles.menuItem,
    paddingLeft: 15,
  },
  clearBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconClear: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  errorBox: {
    paddingHorizontal: 15,
    paddingTop: 3,
  },
});

export default observer(TextDataUpdateScreen);
