import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/extension.ts"],
  clean: true,
  external: ["vscode"],
  format: ["cjs", "esm"],
  outDir: "out",
  sourcemap: true,
});
