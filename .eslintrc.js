module.exports = {
  'env': {
    'node': true,
    'browser': true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'rules': {
    'indent': ['error', 2],
    'no-console': ['error', { allow: [ 'error'] }],
    'quotes': ['error', 'single'],
    'array-callback-return': 'error',
    'eqeqeq': ['error', 'always'],
    'no-multi-spaces': 'error',
    'keyword-spacing': 'error',
    'space-before-function-paren': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'brace-style': 'error',
    'curly': 'error',
    'no-multiple-empty-lines': 'error',
    'operator-linebreak': 'error',
    'one-var': ['error', 'never'],
    'block-spacing': 'error',
    'camelcase': ['error', {'properties': 'never', 'ignoreDestructuring': true }],
    'comma-dangle': 'error',
    'comma-style': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': 'error',
    'semi': ['error', 'always'],
    'linebreak-style': ['error', 'unix']
  }
};
