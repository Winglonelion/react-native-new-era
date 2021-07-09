const { defaults: tsjPreset } = require('ts-jest/presets');

function ignoreModules() {
  const template = 'node_modules/(?!(__list__)/)';
  const list = [
    '@react-native',
    'react-native',
    'd3-.*',
    'react-native-vector-icons',
    'react-native-reanimated',
    'react-native-config',
    'react-native-screens',
    'react-native-gesture-handler',
    '@react-navigation/.*',
    '@unimodules/.*',
    '@react-native-community',
  ];
  const listString = list.join('|');
  return template.replace('__list__', listString);
}

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/__tests__/setup-test.ts'],
  transformIgnorePatterns: [
    //
    ignoreModules(),
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    //
    '<rootDir>/ios/',
    '<rootDir>/android/',
    '<rootDir>/scripts/',
    '<rootDir>/node_modules/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      babelConfig: true,
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  collectCoverageFrom: [
    //
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
  ],
  coveragePathIgnorePatterns: [
    //
    'src/mock',
    'src/index.tsx',
    'node_modules/*',
  ],
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  coverageDirectory: 'coverage',
  verbose: true,
  testEnvironment: 'jsdom',
  globalSetup: './jest.setup.js',
};
