module.exports = {
    // The root of the source code
    roots: ['<rootDir>/src'],

    // this adds support for typescript
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    // Run special logic, such as cleaning up components
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    // Files pattern to test, must be inside a `__tests__` folder and must contain `.test` or `.spec` at the end of the filename
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    // The environment where the tests will run
    testEnvironment: 'jsdom',

    // Directories to find the modules
    moduleDirectories: ['node_modules', 'src'],
};
