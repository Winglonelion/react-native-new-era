module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'react-native-paper/babel',
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
