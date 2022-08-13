module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix .',
    'prettier --config .prettierrc "./**/*.{js,jsx,ts,tsx,css,json,html}" --write',
  ],
};
