import { action, computed, makeObservable, observable } from 'mobx';

class TextDataUpdateScreenStore {
  text: string = '';
  key: string = '';

  error: string = '';
  errorHandler?: () => void;

  constructor({
    key,
    errorHandler,
  }: {
    key: string;
    errorHandler?: () => void;
  }) {
    this.key = key;
    this.errorHandler = errorHandler;
    makeObservable(this, {
      text: observable,
      error: observable,
      validate: action,
      clear: action,
      setText: action,
      setError: action,
      showClearButton: computed,
    });
  }

  get showClearButton() {
    return this.text.length > 0;
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

  static provideStore(key: string, errorHandler?: () => void) {
    if (TextDataUpdateScreenStore.currentKey === key) {
      if (!TextDataUpdateScreenStore.currentStore) {
        TextDataUpdateScreenStore.currentStore = new TextDataUpdateScreenStore({
          key,
          errorHandler,
        });
      }
      return TextDataUpdateScreenStore.currentStore;
    }
    const store = new TextDataUpdateScreenStore({ key, errorHandler });
    TextDataUpdateScreenStore.currentStore = store;
    return store;
  }

  static getCurrentStore() {
    return TextDataUpdateScreenStore.currentStore;
  }

  static currentStore: TextDataUpdateScreenStore;
  static currentKey: string = '';
}

export default TextDataUpdateScreenStore;
