# ESLint + Prettier Config for Modern JavaScript/TypeScript Projects

[![npm version](https://badge.fury.io/js/eslint-prettier-itstandu.svg)](https://badge.fury.io/js/eslint-prettier-itstandu)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Một package cấu hình ESLint và Prettier toàn diện cho các dự án NestJS, Next.js, React và Vite. Cung cấp cấu hình sẵn sàng sử dụng với các quy tắc nghiêm ngặt về chất lượng code, TypeScript và formatting nhất quán.

**Tính năng nổi bật:**

- ✅ **Linh hoạt**: Sử dụng cả ESLint + Prettier cùng lúc, hoặc chỉ một trong hai
- ✅ **Tách biệt**: Import riêng ESLint config hoặc Prettier config khi cần
- ✅ **Đầy đủ**: Hỗ trợ TypeScript, React, import sorting, và nhiều framework khác

## ✨ Tính năng

### 🔧 ESLint Configuration

- **TypeScript Support**: Cấu hình đầy đủ cho TypeScript với các quy tắc nghiêm ngặt
- **React Support**: Hỗ trợ React và React Hooks với các quy tắc accessibility
- **Import Management**: Tự động sắp xếp và kiểm tra import statements
- **Code Quality**: Các quy tắc nghiêm ngặt về chất lượng code
- **Prettier Integration**: Tích hợp Prettier để tránh xung đột formatting

### 🎨 Prettier Configuration

- **Import Sorting**: Tự động sắp xếp import theo thứ tự logic
- **Tailwind CSS**: Hỗ trợ Tailwind CSS với plugin chuyên dụng
- **Consistent Formatting**: Quy tắc formatting nhất quán cho toàn bộ dự án

## 📦 Cài đặt

Chỉ cần cài đặt **1 package duy nhất**:

```bash
npm install -D eslint-prettier-itstandu
```

hoặc với yarn:

```bash
yarn add -D eslint-prettier-itstandu
```

hoặc với pnpm:

```bash
pnpm add -D eslint-prettier-itstandu
```

## ⚙️ Cấu hình

### 🔀 Cách sử dụng

Bạn có **3 cách** để sử dụng package này:

#### 1. **Sử dụng cả ESLint + Prettier cùng lúc** (Khuyên dùng)

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'],
};
```

```json
// .prettierrc.json
{
  "extends": "eslint-prettier-itstandu/prettier.json"
}
```

#### 2. **Chỉ sử dụng ESLint config riêng biệt**

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu/eslint'],
};
```

#### 3. **Chỉ sử dụng Prettier config riêng biệt**

```json
// .prettierrc.json
{
  "extends": "eslint-prettier-itstandu/prettier-config"
}
```

### Cấu hình chi tiết

#### 1. ESLint Configuration (.eslintrc.js)

Tạo file `.eslintrc.js` trong thư mục root của dự án:

```javascript
module.exports = {
  extends: ['eslint-prettier-itstandu'],
};
```

#### 2. Prettier Configuration (.prettierrc.json)

Tạo file `.prettierrc.json` trong thư mục root của dự án:

```json
{
  "extends": "eslint-prettier-itstandu/prettier.json"
}
```

**Hoặc sử dụng Prettier config riêng biệt:**

```json
{
  "extends": "eslint-prettier-itstandu/prettier-config"
}
```

### 3. TypeScript Configuration (nếu cần)

Đảm bảo file `tsconfig.json` của bạn có cấu hình phù hợp:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## 🚀 Sử dụng với các Framework khác nhau

### Next.js / React

**package.json:**

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

**.eslintrc.js:**

```javascript
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  rules: {
    // Thêm quy tắc tùy chỉnh nếu cần
  },
};
```

### NestJS

**.eslintrc.js:**

```javascript
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  rules: {
    // Tắt một số quy tắc cho NestJS
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
```

### Vite + React

**.eslintrc.js:**

```javascript
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  env: {
    browser: true,
    es2020: true,
  },
};
```

## 📋 Quy tắc ESLint được bao gồm

### TypeScript Rules (Nghiêm ngặt)

- ✅ `@typescript-eslint/no-non-null-assertion`: Cấm sử dụng `!`
- ✅ `@typescript-eslint/no-explicit-any`: Cấm sử dụng `any`
- ✅ `@typescript-eslint/no-floating-promises`: Phát hiện promise không được handle
- ✅ `@typescript-eslint/no-unsafe-*`: Các quy tắc an toàn type
- ✅ `@typescript-eslint/prefer-nullish-coalescing`: Ưu tiên `??` thay vì `||`
- ✅ `@typescript-eslint/prefer-optional-chain`: Ưu tiên optional chaining
- ✅ `@typescript-eslint/no-unused-vars`: Phát hiện biến không sử dụng
- ✅ `@typescript-eslint/explicit-function-return-type`: Yêu cầu kiểu trả về rõ ràng

### Import Management

- ✅ `import/no-useless-path-segments`: Loại bỏ path segments không cần thiết
- ✅ `import/no-duplicates`: Phát hiện duplicate imports
- ✅ Import sorting tự động với Prettier

### Code Quality

- ✅ `no-console`: Cấm console.log trong production
- ✅ `no-debugger`: Cấm debugger statements
- ✅ `no-var`: Ưu tiên let/const
- ✅ `prefer-const`: Sử dụng const khi có thể
- ✅ `prefer-arrow-callback`: Ưu tiên arrow functions
- ✅ `object-shorthand`: Sử dụng shorthand object syntax
- ✅ `prefer-template`: Ưu tiên template literals

### React Rules

- ✅ React recommended rules
- ✅ React Hooks rules
- ✅ JSX accessibility (jsx-a11y)

## 🎨 Quy tắc Prettier

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "bracketSameLine": false
}
```

### Import Sorting Rules

Imports được sắp xếp theo thứ tự ưu tiên:

1. **React/Next.js**: `react`, `next`
2. **Node.js**: `node:*`, built-ins
3. **Third-party modules**
4. **Framework specific**:
   - `@nestjs/*`
   - `@prisma/*`
   - `@types/*`
   - `@faker-js/*`
   - `@eslint/*`
   - `@nestjs-modules/*`
5. **Internal imports**:
   - `@/common/*`
   - `@/components/*`
   - `@/modules/*`
   - `src/*`
6. **Relative imports**: `./`, `../`

## 🛠️ Tùy chỉnh cấu hình

### Thêm quy tắc tùy chỉnh

**.eslintrc.js:**

```javascript
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  rules: {
    // Thêm quy tắc mới
    'no-console': 'warn', // Thay đổi từ error thành warn
    'custom-rule': 'error',

    // Tắt quy tắc không mong muốn
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
```

### Tùy chỉnh Prettier

**.prettierrc.json:**

```json
{
  "extends": "eslint-prettier-itstandu/prettier.json",
  "printWidth": 120,
  "tabWidth": 4,
  "singleQuote": false
}
```

### Override cho thư mục cụ thể

**.eslintrc.js:**

```javascript
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['src/migrations/*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
```

## 📜 Scripts hữu ích

Thêm vào `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx --cache",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix --cache",
    "lint:staged": "eslint --fix --cache",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "format:staged": "prettier --write",
    "typecheck": "tsc --noEmit",
    "check:all": "npm run typecheck && npm run lint && npm run format:check",
    "fix:all": "npm run typecheck && npm run lint:fix && npm run format"
  }
}
```

## 🔗 Git Hooks với Husky (Khuyên dùng)

Để tự động chạy linting và formatting trước khi commit, hãy cài đặt và cấu hình Husky trong dự án của bạn:

### 1. Cài đặt Husky và lint-staged

```bash
npm install -D husky lint-staged
# hoặc
yarn add -D husky lint-staged
```

### 2. Khởi tạo Husky

```bash
npx husky install
```

### 3. Thêm các git hooks

```bash
# Pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Pre-push hook (tùy chọn)
npx husky add .husky/pre-push "npm run typecheck"
```

### 4. Cấu hình lint-staged trong package.json

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix --cache",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

### 5. Các script mẫu cho package.json

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx --cache",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix --cache",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "check:all": "npm run typecheck && npm run lint && npm run format:check",
    "fix:all": "npm run lint:fix && npm run format"
  }
}
```

### 6. Cấu hình VS Code để tự động format on save

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 🎯 Ví dụ hoàn chỉnh với Husky

```bash
# Tạo dự án mới
npx create-next-app@latest my-app --typescript
cd my-app

# Cài đặt dependencies
npm install -D eslint-prettier-itstandu husky lint-staged

# Khởi tạo husky
npx husky install

# Thêm pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Cấu hình package.json
npm pkg set scripts.prepare="husky install"
npm pkg set "lint-staged"='{"*.{js,jsx,ts,tsx}":["eslint --fix","prettier --write"],"*.{json,css,md}":["prettier --write"]}'

# Tạo file .eslintrc.js
echo 'module.exports = { extends: ["eslint-prettier-itstandu"] };' > .eslintrc.js

# Tạo file .prettierrc.json
echo '{ "extends": "eslint-prettier-itstandu/prettier.json" }' > .prettierrc.json
```

Bây giờ mọi commit sẽ tự động chạy linting và formatting! 🚀

## 📁 Examples

Thư mục `examples/` chứa các file cấu hình mẫu và script setup để bạn có thể sử dụng ngay:

- **`.eslintrc.js`** - ESLint configuration mẫu
- **`.prettierrc.json`** - Prettier configuration mẫu
- **`package.json`** - Package.json với Husky và lint-staged
- **`setup-husky.sh`** - Script tự động thiết lập Husky

Xem chi tiết trong [examples/README.md](examples/README.md)

## 🔧 IDE Integration

### VS Code

Tạo file `.vscode/settings.json`:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### WebStorm / IntelliJ

1. Cài đặt Prettier plugin
2. Cài đặt ESLint plugin
3. Cấu hình auto-fix on save

## 🚨 Xử lý Conflicts

### Với Prettier

Nếu có conflict giữa ESLint và Prettier:

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  rules: {
    // Tắt các quy tắc ESLint conflict với Prettier
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};
```

### Với TypeScript Compiler

Một số quy tắc có thể conflict với TS compiler:

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  rules: {
    // Tắt nếu conflict với TS strict mode
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  },
};
```

## 📚 Ví dụ dự án

### Next.js với TypeScript

```bash
npx create-next-app@latest my-app --typescript
cd my-app
npm install -D eslint-prettier-itstandu
```

**Cấu hình files:**

```javascript
// .eslintrc.js - Cách 1: Sử dụng cả ESLint + Prettier
module.exports = {
  extends: ['eslint-prettier-itstandu'],
};
```

```json
// .prettierrc.json
{
  "extends": "eslint-prettier-itstandu/prettier.json"
}
```

**Hoặc chỉ sử dụng ESLint riêng biệt:**

```javascript
// .eslintrc.js - Cách 2: Chỉ ESLint
module.exports = {
  extends: ['eslint-prettier-itstandu/eslint'],
};
```

**Hoặc chỉ sử dụng Prettier riêng biệt:**

```json
// .prettierrc.json - Cách 3: Chỉ Prettier
{
  "extends": "eslint-prettier-itstandu/prettier-config"
}
```

```json
// package.json (thêm scripts)
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "build": "next build",
    "check:all": "npm run lint && npm run format:check && npm run build"
  }
}
```

### NestJS với TypeScript

```bash
npm i -g @nestjs/cli
nest new my-nest-app
cd my-nest-app
npm install -D eslint-prettier-itstandu
```

**Cấu hình:**

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

## 🐛 Troubleshooting

### Lỗi "Cannot find module" với TypeScript paths

Đảm bảo `tsconfig.json` có cấu hình paths đúng:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Prettier không hoạt động

Kiểm tra:

1. File `.prettierrc.json` có tồn tại
2. Prettier extension đã được cài đặt trong IDE
3. Restart IDE sau khi thay đổi cấu hình

### ESLint không nhận ra React

Đảm bảo có file React component trong thư mục được scan, hoặc thêm:

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint-prettier-itstandu'],
  settings: {
    react: {
      version: 'detect', // hoặc chỉ định version cụ thể: "18.0"
    },
  },
};
```

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request trên GitHub.

### Phát triển cục bộ

```bash
git clone https://github.com/your-repo/eslint-prettier-itstandu.git
cd eslint-prettier-itstandu
npm install
npm run test  # Chạy test
npm run lint  # Kiểm tra linting
```

---

**Lưu ý**: Package này được thiết kế để hoạt động tốt với các dự án hiện đại sử dụng TypeScript. Nếu bạn gặp vấn đề với JavaScript thuần, hãy xem xét điều chỉnh cấu hình phù hợp.
