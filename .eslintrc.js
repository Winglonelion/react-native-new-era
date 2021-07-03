module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier'],
  env: {
    // browser: true,
    // es2020: true,
    // jest: true,
    // es6: true,
    // node: true,
  },
  globals: {
    // __jest: true,
    // __DEV__: true,
    // GLOBAL: true,
  },
  rules: {
    // 'no-console': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
