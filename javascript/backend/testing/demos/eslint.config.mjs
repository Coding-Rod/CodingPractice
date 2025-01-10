import globals from "globals";
import pluginJs from "@eslint/js";
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {sourceType: "commonjs"},
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];

