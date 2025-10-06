# Tạo file eslint.config.js mẫu cho dự án của bạn

import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
