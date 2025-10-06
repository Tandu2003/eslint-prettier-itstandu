# ESLint + Prettier Config

[![npm version](https://badge.fury.io/js/eslint-prettier-itstandu.svg)](https://badge.fury.io/js/eslint-prettier-itstandu)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Package cấu hình ESLint và Prettier toàn diện với **3 mức độ kiểm tra** khác nhau cho các dự án JavaScript/TypeScript hiện đại.

## ✨ Tính năng chính

- 🔥 **3 mức độ ESLint**: High (nghiêm ngặt), Medium (trung bình), Low (cơ bản)
- 🎯 **Mặc định cao**: Sử dụng mức độ nghiêm ngặt nhất cho production
- 🔄 **Linh hoạt**: Dùng riêng lẻ hoặc kết hợp ESLint + Prettier
- 📦 **Đầy đủ**: Hỗ trợ TypeScript, React, NestJS, Next.js, Vite

## 📦 Cài đặt

```bash
npm install -D eslint-prettier-itstandu
```

## 🚀 Cách sử dụng

### 3 Mức Độ ESLint

| Mức Độ        | Sử Dụng Khi            | Ví Dụ                                                 |
| ------------- | ---------------------- | ----------------------------------------------------- |
| 🔥 **High**   | Production, dự án lớn  | `extends: ['eslint-prettier-itstandu']`               |
| ⚡ **Medium** | Development, dự án vừa | `extends: ['eslint-prettier-itstandu/eslint-medium']` |
| 🌱 **Low**    | Learning, PoC          | `extends: ['eslint-prettier-itstandu/eslint-low']`    |

### Cấu hình cơ bản

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'], // Mặc định = High level
};
```

```json
// .prettierrc.json
{
  "extends": "eslint-prettier-itstandu/prettier.json"
}
```

### Với các framework

#### Next.js / React

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'],
};
```

#### NestJS

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  rules: {
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
```

## 📜 Scripts hữu ích

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "check:all": "npm run typecheck && npm run lint && npm run format:check"
  }
}
```

## 🔧 IDE Integration

### VS Code

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 🛠️ Troubleshooting

### ESLint v9 không tìm thấy eslint.config.js

Nếu bạn gặp lỗi "ESLint couldn't find an eslint.config.(js|mjs|cjs) file", hãy tạo file `eslint.config.js` trong thư mục gốc dự án:

```javascript
// eslint.config.js
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
```

Sau đó chạy:
```bash
npm install eslint
npx eslint .
```

## 📄 License

MIT License
