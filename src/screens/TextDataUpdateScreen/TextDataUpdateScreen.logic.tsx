import TextDataUpdateScreenStore from './TextDataUpdateScreen.store';
import { useState, useCallback, useRef } from 'react';
import { TextInput } from 'react-native';

const useTextDataUpdateScreenLogic = (key: string) => {
  const inputRef = useRef<TextInput>(null);
  const [store] = useState(() => {
    return TextDataUpdateScreenStore.provideStore(key, () => {
      inputRef.current?.blur();
    });
  });

  const clearError = useCallback(() => {
    store.setError('');
  }, [store]);

  const { text, setText, clear, error } = store;
  return { text, setText, clearText: clear, error, clearError, inputRef };
};

export default useTextDataUpdateScreenLogic;
