module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/auth',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  displayName: 'auth',
  transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' },
};
