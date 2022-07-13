import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'cjs',
	},
	plugins: [
		typescript()
	],
	external: Object.keys(pkg.peerDependencies)
};