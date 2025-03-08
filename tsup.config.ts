import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    target: "es2022",
    keepNames: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    outDir: "dist",
});
