module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error',
  },
};
