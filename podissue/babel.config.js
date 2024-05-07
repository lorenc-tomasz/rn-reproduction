module.exports = {
  presets: ['module:@react-native/babel-preset'],
  overrides: [
    {
      test: fileName => !fileName.includes('node_modules'),
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
  ],
  plugins: [
    '@emotion/babel-plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _layouts: './src/components/layouts',
          _templates: './src/components/templates',
          _navigations: './src/navigations',
          _reducers: './src/reducers',
          _scenes: './src/scenes',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
          _types: './src/types',
          _stores: '/src/stores',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
