import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './coverage',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
