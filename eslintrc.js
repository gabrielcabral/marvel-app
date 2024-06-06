module.exports = {
    parser: '@typescript-eslint/parser', // Define o parser do TypeScript
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    parserOptions: {
      ecmaVersion: 2020, // Permite a análise de sintaxe moderna do ECMAScript
      sourceType: 'module', // Permite o uso de imports
      ecmaFeatures: {
        jsx: true, // Habilita JSX
      },
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
    rules: {
      'prettier/prettier': 'error', // Mostra erros do Prettier como erros do ESLint
      'react/react-in-jsx-scope': 'off', // Não é necessário importar React no escopo do JSX com React 17+
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  };
  