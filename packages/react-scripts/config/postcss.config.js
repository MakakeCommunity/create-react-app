'use strict';

module.exports = ({ env }) => ({
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-calc': {},
    'postcss-icss-values': {},
    'postcss-custom-properties': {},
    'postcss-cssnext': {},
    'postcss-flexbugs-fixes': {},
    'postcss-font-magician': env === 'production' ? false : {},
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
