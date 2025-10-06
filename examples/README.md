# ESLint + Prettier + Husky Examples

Thư mục này chứa các file cấu hình mẫu để bạn có thể sử dụng với `eslint-prettier-itstandu` package.

## 📁 Cấu trúc thư mục

```
examples/
├── .eslintrc.js          # ESLint configuration mẫu
├── .prettierrc.json      # Prettier configuration mẫu
├── package.json          # Package.json với Husky + lint-staged
├── setup-husky.sh        # Script tự động setup Husky
└── README.md            # File này
```

## 🚀 Cách sử dụng

### 1. Copy các file cấu hình

```bash
# Copy ESLint config
cp examples/.eslintrc.js .eslintrc.js

# Copy Prettier config
cp examples/.prettierrc.json .prettierrc.json
```

### 2. Cài đặt dependencies

```bash
npm install -D eslint-prettier-itstandu husky lint-staged
```

### 3. Chạy script setup tự động

```bash
chmod +x examples/setup-husky.sh
./examples/setup-husky.sh
```

### 4. Hoặc thiết lập thủ công

```bash
# Khởi tạo husky
npx husky install

# Thêm prepare script
npm pkg set scripts.prepare="husky install"

# Tạo pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"

# Thêm lint-staged config
npm pkg set lint-staged='{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --cache",
    "prettier --write"
  ],
  "*.{json,css,scss,md}": [
    "prettier --write"
  ]
}'
```

## ⚡ Tính năng

Với cấu hình này, bạn sẽ có:

- ✅ **Pre-commit hooks**: Tự động chạy ESLint + Prettier trước khi commit
- ✅ **Pre-push hooks**: Kiểm tra TypeScript types trước khi push
- ✅ **Lint-staged**: Chỉ kiểm tra các file đã được staged
- ✅ **Auto-fix**: Tự động sửa các lỗi có thể fix được

## 🎯 Ví dụ workflow

```bash
# Chỉnh sửa file
echo "console.log('hello')" > test.js

# Stage file
git add test.js

# Commit - sẽ tự động chạy lint-staged
git commit -m "Add test file"
# Output:
# ✅ ESLint: No errors
# ✅ Prettier: Formatted successfully
# [main abc1234] Add test file

# Push - sẽ tự động chạy typecheck nếu có TypeScript
git push
# Output:
# ✅ TypeScript: No errors
```

## 🔧 Tùy chỉnh

### Thay đổi lint-staged patterns

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,scss,md}": [
      "prettier --write"
    ],
    "*.test.{js,ts}": [
      "npm test -- --findRelatedTests"
    ]
  }
}
```

### Thêm nhiều git hooks

```bash
# Pre-push hook để chạy tests
npx husky add .husky/pre-push "npm test"

# Commit-msg hook để kiểm tra format commit message
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

## 🛠️ Troubleshooting

### Nếu husky không hoạt động:

```bash
# Reinstall husky
npx husky install
npm run prepare
```

### Nếu hooks không chạy:

```bash
# Kiểm tra permissions
chmod +x .husky/*
```

### Nếu gặp lỗi với Windows:

```bash
# Thử dùng git bash thay vì cmd
# Hoặc chạy script bằng WSL
```

## 📚 Tài liệu tham khảo

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/lint-staged/lint-staged)
- [ESLint + Prettier Setup Guide](https://prettier.io/docs/en/integrating-with-linters.html)
