import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist"], // Ignore build files
  },
  {
    files: ["**/*.{js,jsx}"], // Target JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Modern ECMAScript support
      globals: globals.browser, // Use browser-specific globals (e.g., `window`, `document`)
      parserOptions: {
        ecmaVersion: "latest", // Always use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX syntax
        sourceType: "module", // Use ES modules
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the installed React version
      },
    },
    plugins: {
      react, // React-specific linting rules
      "react-hooks": reactHooks, // React hooks rules
      "react-refresh": reactRefresh, // React Refresh rules for Fast Refresh
    },
    rules: {
      // JavaScript/ESLint rules
      ...js.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules, // For React 17+ JSX transform
      ...reactHooks.configs.recommended.rules, // Enforces best practices with hooks

      // Custom rules
      "react/jsx-no-target-blank": "warn", // Warn about `target="_blank"` without `rel="noopener"`
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Ensure only components are exported in React Refresh
      ],

      // Example rule adjustments (optional):
      "no-console": "warn", // Warn on console.log statements
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables starting with `_`
      "react/prop-types": "off", // Disable PropTypes if you're using TypeScript
    },
  },
];
