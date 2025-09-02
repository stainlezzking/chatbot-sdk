import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "src/app.ts",
  output: [
    {
      file: "dist/app.js",
      format: "umd",
      name: "SupportWidget",
      sourcemap: true,
    },
    // {
    //   file: "dist/app.esm.js",
    //   format: "esm",
    // },
  ],
  plugins: [
    resolve({ extensions: [".ts", ".js"] }),
    typescript(),
    copy({
      targets: [{ src: "src/iframe/chatbox.html", dest: "dist/iframe" }],
      watch: "src/iframe",
    }),
    terser(),
    serve({
      open: true,
      contentBase: "dist",
      port: 3000,
    }),
    livereload("dist"),
  ],
};
