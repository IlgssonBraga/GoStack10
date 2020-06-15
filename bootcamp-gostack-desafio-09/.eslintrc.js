module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warn', {extensions:['.jsx','.js']}
      ],
      'import/prefer-default-export': 'off',
      "react/state-in-constructor": 'off',
      "eslint-disable-next-line": 'off',
      "react/static-property-placement": 'off',
      "eslint-disable-next-line" : 'off',
      "no-param-reassign": 'off',
      "no-console": ["error", {allow: ["tron"]}],
      "react-hooks/rules-of-hooks": 'error',
      "react-hooks/exhaustive-of-deps": 'warn',
      "react-hooks/exhaustive-of-deps": 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-underscore-dangle': 'off',
      'camelcase': 'off',
      'no-nested-ternary': 'off',
      'jsx-a11y/label-has-associated-control':'off',
      'react/forbid-prop-types':'off'

  },

  settings: {
      "import/resolver" :{
          "babel-plugin-root-import": {
              rootPathSuffix: "src"
          }
      }
  }
};
