const path = require('path')

module.exports = {
  name: 'typescript-algorithms',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '\\.spec\\.ts$',
  reporters: [
    'jest-dot-reporter',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: path.resolve(__dirname, '.report', 'jest.html'),
      },
    ],
  ],
  collectCoverage: true,
  coverageDirectory: path.resolve(__dirname, '.report', 'coverage'),
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
