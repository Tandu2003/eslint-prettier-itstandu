module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json"
      }
    }
  },
  rules: {
    // === Prettier integration ===
    "prettier/prettier": "error",

    // === TS strict rules ===
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-var-requires": "error",

    // === Import hygiene ===
    "import/no-useless-path-segments": "error",
    "import/no-duplicates": "error",
    "import/order": "off",

    // === General quality ===
    "no-console": "error",
    "no-debugger": "error",
    "no-alert": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "object-shorthand": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "prefer-destructuring": [
      "error",
      { "array": true, "object": true },
      { "enforceForRenamedProperties": false }
    ],

    // === NestJS exception ===
    "class-methods-use-this": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off"
  }
};
