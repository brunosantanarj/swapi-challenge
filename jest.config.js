module.exports = {
  preset: 'rollup-jest',
  transform: {
    '\\.m?js$': 'rollup-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  setupFilesAfterEnv: [
    '@testing-library/svelte/cleanup-after-each',
  ],
  moduleFileExtensions: ['js', 'svelte'],
	coverageReporters: ['html'],
};
