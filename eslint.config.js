// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021, // 최신 ECMAScript 기능 활성화
        sourceType: 'module', // ES6 모듈 사용
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],

      'prefer-const': 'error',
      'no-console': 'warn',
    },
    overrides: [
      {
        files: ['server/**/*.js', 'server/**/*.ts'], // 서버 파일 경로에 맞게 조정
        env: {
          node: true, // Node.js 전역 변수 활성화
          es2021: true, // 최신 ECMAScript 기능 활성화
        },
        rules: {
          'no-undef': 'off', // Node.js 전역 변수 사용 시 'no-undef' 비활성화
          'no-console': 'warn', // 서버 사이드에서 console 사용 시 경고
        },
      },
    ],
  },
  eslintConfigPrettier,
);