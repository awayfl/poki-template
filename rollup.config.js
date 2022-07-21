import typescript from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import gzip from 'rollup-plugin-gzip';

export default {
	input: './src/Main.ts',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'Main',
		file: './bin/js/Main.js'
	},
	plugins: [
		typescript(),
		nodeResolve(),
		{
            transform(code, id) {
                return code.replace(/\/\*\* @class \*\//g, "\/*@__PURE__*\/");
            }
        },
		commonjs(),
		terser({
			// mangle: {
			// 	properties: {
			// 		reserved: ['startPokiGame', 'userAgent', 'Number', '__constructor__', 'prototype']
			// 	}
			// }
		}),
		gzip()
	]
};