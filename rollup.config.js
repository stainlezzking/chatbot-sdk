import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/app.ts",
  output: [
    {
      file: "dist/app.js",
      format: "umd",
      name: "SupportWidget",
    },
    // {
    //   file: "dist/app.esm.js",
    //   format: "esm",
    // },
  ],
  plugins: [resolve({ extensions: [".ts", ".js"] }), typescript()],
};
