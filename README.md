This is a fork of [create-react-app](https://github.com/facebook/create-react-app)

All changes can be found on the `changes` branch

#### How to

[Blog post](https://amido.com/blog/custom-react-app/)

#### Changes

- Add [graphql-tag](https://github.com/apollographql/graphql-tag)/loader
- Add an `@` alias to the `src` directory
- Add an `@` alias to the `src` directory (Jest)
- Add [csso-webpack-plugin](https://github.com/zoobestik/csso-webpack-plugin)
- Add PostCSS config and plugins
- Add [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
- Add [babel-plugin-react-remove-properties](https://github.com/oliviertassinari/babel-plugin-react-remove-properties) (prod only)
- Add Sass support
- Multi Tenancy
  - Add [babel-plugin-tenant-resolver](https://github.com/MakakeCommunity/babel-plugin-tenant-resolver)
  - Add SASS Loader variables option
- Disable cacheDirectory feature from babel-loader
- SVGs as components
  - Add [@svgr/webpack](https://github.com/smooth-code/svgr/tree/master/packages/webpack)
  - Update Jest file transform
- Add `allChunks: true` to `ExtractTextPlugin` (prod)
