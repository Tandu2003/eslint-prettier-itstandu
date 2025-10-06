// eslint-disable-next-line @typescript-eslint/no-var-requires
const js = require("@eslint/js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tseslint = require("@typescript-eslint/eslint-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsparser = require("@typescript-eslint/parser");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierPlugin = require("eslint-plugin-prettier");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require("eslint-config-prettier");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// Check if tsconfig.json exists
const tsconfigPath = path.join(process.cwd(), "tsconfig.json");
const hasTsConfig = fs.existsSync(tsconfigPath);

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = [
  // Base configuration for all files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    ignores: [
      "eslint.config.js",
      "index.js",
      "prettier-config.js",
      "eslint-config-*.js",
      "node_modules/**",
      "dist/**",
      "build/**",
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ...(hasTsConfig && { project: "./tsconfig.json" }),
      },
      globals: {
        // Add any global variables if needed
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "readonly",
        global: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // TypeScript recommended rules (basic only)
      ...tseslint.configs.recommended.rules,

      // Prettier integration
      ...prettierConfig.rules,
      "prettier/prettier": "error",

      // === TS rules (non-type-aware) - LOW LEVEL ===
      "@typescript-eslint/no-unused-vars": "warn", // Changed to warn
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-var-requires": "off", // Relaxed for low level

      // === General quality - LOW LEVEL ===
      "no-console": "warn", // Changed from error to warn
      "no-debugger": "warn", // Changed from error to warn
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "error",
      // Removed many strict rules for low level

      // === NestJS exception ===
      "class-methods-use-this": "off",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",
    },
    settings: {
      // Minimal settings for low level
    },
  },

  // Configuration specifically for TypeScript files with type information - LOW LEVEL
  ...(hasTsConfig
    ? [
        {
          files: ["**/*.{ts,tsx}"],
          rules: {
            // === TS type-aware rules - LOW LEVEL ===
            // Most type-aware rules removed for low level
          },
        },
      ]
    : []),

  // Configuration for React files - LOW LEVEL
  {
    files: ["**/*.{jsx,tsx}"],
    rules: {
      // Basic React rules only
    },
  },
];
