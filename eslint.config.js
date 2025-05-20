import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "module", globals: { process: "readonly", require: "readonly", module: "readonly" } } },
  { files: ["src/**/*.js"], languageOptions: { globals: globals.node } },
  { files: ["tests/**/*.js", "__tests__/**/*.js"], languageOptions: { globals: { ...globals.node, describe: "readonly", it: "readonly", expect: "readonly", afterAll: "readonly", beforeAll: "readonly", test: "readonly" } } },
]);
