/* eslint-disable import/no-extraneous-dependencies */
import { pathsToModuleNameMapper } from 'ts-jest/utils';

import { compilerOptions } from './tsconfig.json';

export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  // collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
