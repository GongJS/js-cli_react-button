import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import clear from 'rollup-plugin-clear'
import analyze from "rollup-plugin-analyzer";
import visualizer from "rollup-plugin-visualizer";
const less = require('less');
const { resolveApp } = require("./paths");
const packageJson = require('../package.json');

const processLess = function(context, payload) {
    return new Promise(( resolve, reject ) => {
      less.render({
        file: context
      }, function(err, result) {
        if( !err ) {
          resolve(result);
        } else {
          reject(err);
        }
      });
  
      less.render(context, {})
      .then(function(output) {
        if( output && output.css ) {
          resolve(output.css);
        } else {
          reject({})
        }
      },
      function(err) {
        reject(err)
      });
  
    })
  }
  
  
export default [
    {
        input: resolveApp('src/index.ts'),
        external: ['react'],
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-ts-lib'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            clear({
                targets: [resolveApp('dist')],
                watch: true,
            }),
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', exclude: ["**/example/**"] }),
            postcss({
                extract: true,
                minimize: true,
                extensions:['css', 'less'],
                process: processLess,
              }),
            terser(),
            analyze({
              hideDeps: true,
              summaryOnly: true
            }),
           visualizer()
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.less$/],
        plugins: [dts()],
    },
]