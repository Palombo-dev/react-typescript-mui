
export default {
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  // Substitua 'yourGlobals' por um objeto de globals adequado
  languageOptions: { globals: yourGlobals },
  extends: [
    'plugin:js/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/flat',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};