import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ["dist", "node_modules"]},
  {files: ["**/*.{js,mjs,cjs,ts}", "tests/**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["tests/**/*.{js,mjs,cjs,ts}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    }
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    }
  }
];