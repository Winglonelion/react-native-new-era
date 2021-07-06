import { observable, action, makeObservable } from 'mobx';

export class TextDataUpdateScreenStore {
  text: string = '';
  key: string = '';

  error: string = '';

  constructor(key: string) {
    this.key = key;
    makeObservable(this, {
      text: observable,
      error: observable,
      validate: action,
      clear: action,
      setText: action,
      setError: action,
    });
  }
  validate = (validator?: (text: string) => { error?: Error }) => {
    if (!validator) return { ok: true };
    const { error } = validator(this.text) || { error: '' };
    return { ok: !error, error };
  };

  clear = () => {
    this.text = '';
  };

  setText = (text: string) => {
    this.text = text;
  };

  setError = (error: string) => {
    this.error = error;
  };

  static provideStore(key: string) {
    if (TextDataUpdateScreenStore.currentKey === key) {
      return TextDataUpdateScreenStore.currentStore;
    }
    const store = new TextDataUpdateScreenStore(key);
    TextDataUpdateScreenStore.currentStore = store;
    return store;
  }

  static getCurrentStore() {
    return TextDataUpdateScreenStore.currentStore;
  }

  static currentStore: TextDataUpdateScreenStore =
    new TextDataUpdateScreenStore('');
  static currentKey: string = '';
}

export default TextDataUpdateScreenStore;
