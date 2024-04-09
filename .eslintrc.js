module.exports = {
     env: {
          browser: true,
          es2021: true,
     },
     extends: [
          'airbnb',
          'prettier',
          'prettier/react',
     ],
     overrides: [
          {
               env: {
                    node: true,
               },
               files: [
                    '.eslintrc.{js,cjs}',
               ],
               parser: 'babel-eslint',
               parserOptions: {
                    sourceType: 'script',
               },
          },
     ],
     parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
     },
     plugins: [
          'react',
          'prettier/prettier',
          'react-hooks'
     ],
     rules: {
          'prettier/prettier': 'error',
          'react/jsx-filename-extension': 0,
          'import/prefer-default-export': 0,

          'react-hooks/rules-of-hooks': 'error',
          'react-hooks/exhaustive-deps': 'warn',
     },
};
