module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    $: false
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier/vue'],
  plugins: ['prettier'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': 'off',
    'no-cond-assign': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 120,
        htmlWhitespaceSensitivity: 'ignore',
        endOfLine: 'auto',
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'no-unused-vars': 'off',
    'require-atomic-updates': 'off'
  }
}
