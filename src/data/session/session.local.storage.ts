import MMKVStorage from 'react-native-mmkv-storage';

const SessionMMKVStore = new MMKVStorage.Loader()
  .withInstanceID('SESSION')
  .withEncryption()
  .encryptWithCustomKey('SESSION_KEY', true, 'session')
  .initialize();

export default SessionMMKVStore;
