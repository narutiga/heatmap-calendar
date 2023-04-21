import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      extensions: [".css"],
      minimize: true,
      extract: true,
      config: {
        path: "./postcss.config.js",
      },
      // inject: {
      //   insertAt: "top",
      // },
    }),
  ],
};
