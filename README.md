This is a fork of [create-react-app](https://github.com/facebook/create-react-app)

All changes can be found on the `changes_v2.0` branch

#### How to

[Blog post](https://amido.com/blog/custom-react-app/)

#### Changes

- Support `@` alias (referencing the `src` directory) in Webpack and Jest
- Support `.graphql|.gql` files in Webpack and Jest
- Support multi-tenancy
  - Add [babel-plugin-tenant-resolver](https://github.com/MakakeCommunity/babel-plugin-tenant-resolver)
  - Add `sass-loader` variables option
- Add options to `@svgr/webpack`
- Add [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
- Add [babel-plugin-react-remove-properties](https://github.com/oliviertassinari/babel-plugin-react-remove-properties) (production only)
- Add [csso-webpack-plugin](https://github.com/zoobestik/csso-webpack-plugin) (production only)
