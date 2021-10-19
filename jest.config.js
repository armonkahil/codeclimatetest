/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  globals: {
    "ts-jest": {
      diagnostics: true
    }
  },
  coverageReporters: [
    "lcov"
  ]
}
