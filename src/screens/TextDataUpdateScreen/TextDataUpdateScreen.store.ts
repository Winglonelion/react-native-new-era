import { observable, action, makeObservable } from 'mobx';

export class TextDataUpdateScreenStore {
  text: string = '';
  key: string = '';

  error: string = '';
  errorHandler: () => void;

  constructor(key: string, errorHandler: () => void) {
    this.key = key;
    this.errorHandler = errorHandler;
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
    this.error = '';
  };

  setText = (text: string) => {
    this.text = text;
  };

  setError = (error: string) => {
    this.error = error;
  };

  onError() {
    this.errorHandler && this.errorHandler();
  }

  static provideStore(key: string, errorHandler: () => void) {
    if (TextDataUpdateScreenStore.currentKey === key) {
      return TextDataUpdateScreenStore.currentStore;
    }
    const store = new TextDataUpdateScreenStore(key, errorHandler);
    TextDataUpdateScreenStore.currentStore = store;
    return store;
  }

  static getCurrentStore() {
    return TextDataUpdateScreenStore.currentStore;
  }

  static currentStore: TextDataUpdateScreenStore =
    new TextDataUpdateScreenStore('', () => null);
  static currentKey: string = '';
}

export default TextDataUpdateScreenStore;
