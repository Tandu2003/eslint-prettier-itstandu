#!/bin/bash

# Setup script for Husky + eslint-prettier-itstandu
# Run this script in your project root to set up git hooks automatically

set -e

echo "🚀 Setting up Husky with eslint-prettier-itstandu..."

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script in your project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Install husky and lint-staged if not already installed
if ! npm list husky &> /dev/null; then
    echo "📦 Installing Husky and lint-staged..."
    npm install -D husky lint-staged
fi

# Initialize husky
if [ ! -d ".husky" ]; then
    echo "🔧 Initializing Husky..."
    npx husky install
else
    echo "✅ Husky already initialized"
fi

# Add prepare script to package.json if not exists
if ! grep -q '"prepare".*"husky install"' package.json; then
    echo "📝 Adding prepare script to package.json..."
    npm pkg set scripts.prepare="husky install"
fi

# Add lint-staged configuration if not exists
if ! grep -q "lint-staged" package.json; then
    echo "📝 Adding lint-staged configuration..."
    npm pkg set lint-staged='{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --cache",
    "prettier --write"
  ],
  "*.{json,css,scss,md}": [
    "prettier --write"
  ]
}'
fi

# Create pre-commit hook if it doesn't exist
if [ ! -f ".husky/pre-commit" ]; then
    echo "🔗 Creating pre-commit hook..."
    npx husky add .husky/pre-commit "npx lint-staged"
    chmod +x .husky/pre-commit
else
    echo "✅ Pre-commit hook already exists"
fi

# Create pre-push hook for type checking (optional)
if [ ! -f ".husky/pre-push" ]; then
    echo "🔗 Creating pre-push hook (optional)..."
    npx husky add .husky/pre-push "npm run typecheck"
    chmod +x .husky/pre-push
fi

echo ""
echo "✅ Husky setup complete!"
echo ""
echo "📋 What was set up:"
echo "  • Pre-commit hook: runs lint-staged (ESLint + Prettier)"
echo "  • Pre-push hook: runs TypeScript type checking"
echo "  • lint-staged: configured for JS/TS and other files"
echo ""
echo "🎯 Next steps:"
echo "  1. Stage your files: git add ."
echo "  2. Try committing: git commit -m 'Your message'"
echo "  3. The hooks will run automatically!"
echo ""
echo "🔧 To customize:"
echo "  • Edit .husky/pre-commit to change pre-commit behavior"
echo "  • Edit .husky/pre-push to change pre-push behavior"
echo "  • Modify lint-staged in package.json for different file patterns"
