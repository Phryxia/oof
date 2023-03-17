import { swc } from 'rollup-plugin-swc3';

export default {
  input: 'src/index.ts',
  output: {
    format: 'cjs',
    file: 'build/cjs/index.cjs',
  },
  plugins: [
    swc({
      exclude: /build*/, // default
      jsc: {}
    }),
  ]
}