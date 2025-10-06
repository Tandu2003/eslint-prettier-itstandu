const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const prettierPlugin = require('eslint-plugin-prettier');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierConfig = require('eslint-config-prettier');
const fs = require('fs');
const path = require('path');

// Check if tsconfig.json exists
const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
const hasTsConfig = fs.existsSync(tsconfigPath);

module.exports = [
  // Base configuration for all files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ignores: [
      'eslint.config.js',
      'index.js',
      'prettier-config.js',
      'eslint-config.js',
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ...(hasTsConfig && { project: './tsconfig.json' }),
      },
      globals: {
        // Add any global variables if needed
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // TypeScript recommended rules
      ...tseslint.configs.recommended.rules,

      // Import plugin recommended rules
      ...importPlugin.configs.recommended.rules,

      // Prettier integration
      ...prettierConfig.rules,
      'prettier/prettier': 'error',

      // React recommended rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,

      // === TS rules (non-type-aware) ===
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-var-requires': 'error',

      // === Import hygiene ===
      'import/no-useless-path-segments': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off',

      // === General quality ===
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'prefer-destructuring': [
        'error',
        { array: true, object: true },
        { enforceForRenamedProperties: false },
      ],

      // === NestJS exception ===
      'class-methods-use-this': 'off',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: hasTsConfig
          ? {
              alwaysTryTypes: true,
              project: './tsconfig.json',
            }
          : undefined,
      },
    },
  },

  // Configuration specifically for TypeScript files with type information
  ...(hasTsConfig
    ? [
        {
          files: ['**/*.{ts,tsx}'],
          rules: {
            // === TS type-aware rules ===
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
          },
        },
      ]
    : []),

  // Configuration for React files
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      // React-specific rules
    },
  },
];
