import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import ContentText from 'components/Base/Text/ContentText';
import messages from 'routes/stacks/Navigation.messages';
import { TextDataUpdateScreenRouteProp } from 'screens/TextDataUpdateScreen';
import TextDataUpdateScreenStore from 'screens/TextDataUpdateScreen/TextDataUpdateScreen.store';
import { goBack } from 'routes/actions';
import Colors from 'theme/colors';

const TextDataOptions = ({
  route,
}: {
  route: TextDataUpdateScreenRouteProp;
}) => {
  return {
    title: route.params.title,
    headerRight: () => {
      if (!route.params.onComplete) return null;
      const submit = () => {
        const { onComplete } = route.params;
        const currentStore = TextDataUpdateScreenStore.getCurrentStore();
        const { ok, error } = currentStore.validate(route.params.validator);

        if (!error && ok) {
          onComplete && onComplete(currentStore.text);
          goBack();
        } else {
          currentStore.setError(error?.message || 'unknown');
          currentStore.onError();
        }
      };
      return (
        <TouchableWithoutFeedback onPress={submit}>
          <View>
            <ContentText size={16} color={Colors.orange}>
              {messages.btn_done}
            </ContentText>
          </View>
        </TouchableWithoutFeedback>
      );
    },
  };
};

export default TextDataOptions;
