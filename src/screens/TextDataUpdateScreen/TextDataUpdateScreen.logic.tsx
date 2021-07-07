import TextDataUpdateScreenStore from './TextDataUpdateScreen.store';
import { useState, useCallback, useRef, useEffect } from 'react';
import { TextInput } from 'react-native';

const useTextDataUpdateScreenLogic = (key: string) => {
  const inputRef = useRef<TextInput>(null);
  const [store] = useState(() => {
    return TextDataUpdateScreenStore.provideStore(key);
  });

  const clearError = useCallback(() => {
    store.setError('');
  }, [store]);

  const setText = useCallback(
    (text: string) => {
      inputRef.current?.setNativeProps({ text });
      store.setText(text);
    },
    [store],
  );

  useEffect(() => {
    if (store.error) {
      inputRef.current?.blur();
    }
  }, [store.error]);

  const clearText = useCallback(() => {
    store.clear();
    inputRef.current?.setNativeProps({ text: '' });
  }, [store]);

  return {
    setText,
    inputRef,
    clearText,
    clearError,
    error: store.error,
    showClearButton: store.showClearButton,
  };
};

export default useTextDataUpdateScreenLogic;
