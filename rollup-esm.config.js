import { swc } from 'rollup-plugin-swc3';

export default {
  input: 'src/index.ts',
  output: {
    format: 'es',
    file: 'build/esm/index.mjs',
  },
  plugins: [
    swc({
      exclude: /build*/, // default
      jsc: {}
    }),
  ]
}