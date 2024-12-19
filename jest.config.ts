import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: [
//     "**/*.{ts,tsx}",
//     "!**/*.d.ts",
//     "!**/node_modules/**",
//   ],
//   coverageDirectory: "coverage"
// }

export default createJestConfig(config);

