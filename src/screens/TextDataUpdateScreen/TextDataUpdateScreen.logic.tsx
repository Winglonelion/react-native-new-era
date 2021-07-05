import TextDataUpdateScreenStore from './TextDataUpdateScreen.store';
import { useState } from 'react';

const useTextDataUpdateScreenLogic = (key: string) => {
  const [store] = useState(() => {
    return TextDataUpdateScreenStore.provideStore(key);
  });
  const { text, setText, clear, error } = store;
  return { text, setText, clearText: clear, error };
};

export default useTextDataUpdateScreenLogic;
