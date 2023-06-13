module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react-refresh"],
  rules: {
    "prettier/prettier": ["error", {"endOfLine": "auto", "printWidth": 80}],
    "react-refresh/only-export-components": "warn",
    quotes: ["error", "double"],
    semi: ["error", "never"],
  }
};