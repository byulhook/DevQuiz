// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // TypeScript 및 기본 ESLint 설정
  ...tseslint.config(
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
        globals: {
          // 필요한 글로벌 변수 정의 (클라이언트 사이드)
          window: 'readonly',
          document: 'readonly',
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
        'no-console': 'warn', // 전역적으로 console 사용 시 경고
      },
    }
  ),

  // 서버 파일에 대한 별도 설정 (Overrides 대신 별도의 객체로 분리)
  {
    files: ['server/**/*.js', 'server/**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // 필요에 따라 다른 Node.js 전역 변수 추가
      },
    },
    rules: {
      'no-undef': 'off', // Node.js 전역 변수 사용 시 'no-undef' 비활성화
      'no-console': 'off', // 서버 파일에서 console 사용 허용
    },
  },

  // Prettier 설정
  eslintConfigPrettier,
];