module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'react'],
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    'arrow-body-style': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-useless-path-segments': 'off',
    'consistent-return': 'off',
    'no-case-declarations': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-else-return': 'error',
    'no-param-reassign': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'object-shorthand': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'class',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'switch',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'try',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'while',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: ['let', 'const'],
      },
    ],
    'prefer-const': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-key': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: true,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/style-prop-object': 'off',
    'react/jsx-props-no-spreading': 'off',
    yoda: 'error',
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'react/prop-types': 0,
    'no-shadow': 'off',
    'no-named-as-default': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external']],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/naming-convention': [
      2,
      // Generics should have meaningful names instead of one-letters.
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: { regex: '[A-Z]{2,2}[a-zA-Z]{2,}', match: true },
      },
    ],
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'react-native',
            importNames: [
              'TouchableOpacity',
              'TouchableHighlight',
              'Pressable',
              'TouchableWithoutFeedback',
              'ScrollView',
              'FlatList',
              'TextInput',
              'SectionList',
            ],
            message:
              "All pressables, scrolls, TextInput interaction should be matched with analytics event reporting. Use an alternative component from _atoms or create an equivalent if it doesn't currently exist.",
          },
          {
            name: 'react-native-gesture-handler',
            importNames: [
              'TouchableOpacity',
              'TouchableHighlight',
              'Pressable',
              'TouchableWithoutFeedback',
              'ScrollView',
              'FlatList',
              'TextInput',
              'SectionList',
            ],
            message:
              "All pressables, scrolls, TextInput interaction should be matched with analytics event reporting. Use an alternative component from _atoms or create an equivalent if it doesn't currently exist.",
          },
          {
            name: '@tanstack/react-query',
            importNames: ['useQuery', 'useMutation'],
            message: 'Import useQuery or useMutation from "services/tanstackQuery" instead',
          },
        ],
      },
    ],
    'no-restricted-properties': [
      2,
      {
        object: 'styled',
        property: 'TouchableOpacity',
        message: 'All touchables should be matched with analytics event reporting. Use TouchableOpacity from _atoms.',
      },
      {
        object: 'styled',
        property: 'TouchableHighlight',
        message: 'All touchables should be matched with analytics event reporting. Use TouchableHighlight from _atoms.',
      },
      {
        object: 'styled',
        property: 'TouchableWithoutFeedback',
        message:
          'All touchables should be matched with analytics event reporting. Use TouchableWithoutFeedback from _atoms.',
      },
      {
        object: 'styled',
        property: 'Pressable',
        message: 'All touchables should be matched with analytics event reporting. Use Pressable from _atoms.',
      },
      {
        object: 'styled',
        property: 'ScrollView',
        message: 'All scrolls should be matched with analytics event reporting. Use ScrollView from _atoms.',
      },
      {
        object: 'styled',
        property: 'TextInput',
        message: 'TextInput interaction should report analytics. Use TextInput from _atoms.',
      },
      {
        object: 'styled',
        property: 'SectionList',
        message: 'All scrolls should be matched with analytics event reporting. Use SectionList from _atoms.',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
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
          _stores: './src/stores',
        },
      },
    },
  },
};
