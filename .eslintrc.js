module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'react-app', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'prettier/prettier': 'error',
    'react/prop-types': 0,
  },
};
