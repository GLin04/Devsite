module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.jpeg$': '<rootDir>/src/__tests__/__mocks__/fileMock.js',
  }
};
