const path = require('path')

module.exports = {
  name: 'typescript-algorithms',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '\\.spec\\.ts$',
  reporters: ['jest-dot-reporter'],
}

// Enable HTML reports if an environment variable is set.
if (process.env.HTML_REPORT === '1') {
  module.exports.reporters.push([
    'jest-html-reporter',
    {
      pageTitle: 'Test Report',
      outputPath: path.resolve(__dirname, '.report', 'jest.html'),
    },
  ])
}

// Enable coverage if an environment variable is set for it.
// This makes it easy to run tests in editors without running coverage reports.
if (process.env.COVERAGE === '1') {
  Object.assign(module.exports, {
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
  })
}
