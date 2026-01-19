module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // ⚠️ 必须放最后
  ],

  rules: {
    // Vue
    'vue/multi-word-component-names': 'off',

    // TS（避免过于严格）
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',

    // Prettier
    'prettier/prettier': 'error'
  }
};
