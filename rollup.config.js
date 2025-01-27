import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
// import { visualizer } from 'rollup-plugin-visualizer';
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        // sourcemap: true, // only enable it to debug manually
      },
      {
        file: packageJson.module,
        format: "esm",
        // sourcemap: true, // only enable it to debug manually
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
      postcss({
        extract: "main.css",
        minimize: true,
      }),
      // visualizer({ filename: './bundle-analysis.html' }), // only to visualize bundle size.
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts()],
    external: [/\.css/],
  },
];
