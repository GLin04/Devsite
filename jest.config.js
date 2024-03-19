module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/client/src/__tests__/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/client/src/__tests__/__mocks__/fileMock.js"
  },
  testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__mocks__/',
    'setupTests.js'
  ],
};

  