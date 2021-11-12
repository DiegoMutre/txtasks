import peerDeepExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json';

// Extensions to be transpiled and resolved
const extensions = ['.ts', '.tsx', '.js', '.jsx'];

// Excluded dependencies from the package.json
const external = Object.keys(packageJson.devDependencies);

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: './src/index.ts', // Bundle Entry file
    output: {
        dir: 'dist', // Folder where the bundle will be generated
        sourcemap: true,
        format: 'esm', // Format of the bundle, in this case `ESModules` (import/export)
        preserveModules: true, // See https://rollupjs.org/guide/en/#outputpreservemodules
    },
    plugins: [
        peerDeepExternal(), // Externalize `peerDependencies` from the bundle
        resolve({
            extensions, // Extensions to be resolved as well
        }), // Resolve `node_modules`
        commonjs(), // Resolve commonjs modules
        babel({
            // Integration rollup with babel
            extensions,
            babelHelpers: 'inline',
            include: extensions.map(ext => `./src/**/*${ext}`),
        }),
        terser(), // Minify the code with terser
    ],
    external, // Dev dependencies to be excluded
};

// Is required to export default the config object
export default config;
