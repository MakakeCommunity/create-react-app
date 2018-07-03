'use strict';

module.exports = ({ env }) => ({
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-calc': {},
    'postcss-custom-properties': {},
    'postcss-cssnext': {},
    'postcss-flexbugs-fixes': {},
    'postcss-color-function': {},
    cssnano:
      env === 'production'
        ? {
            preset: ['default'],
          }
        : false,
  },
  map: env === 'development',
});
