// eslint.config.js
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier: pluginPrettier,
    },
    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,

      eqeqeq: ['error', 'always', { null: 'ignore' }],
      quotes: ['error', 'single'],
      'keyword-spacing': ['error', { before: true }],
      'prefer-const': 'error',
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-restricted-syntax': [
        'warn',
        {
          selector: "MemberExpression[property.name='log']",
          message: 'Убери - console.log()',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['+', '-', '*', '/', '%', '**'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: true,
        },
      ],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-trailing-spaces': 'error',
      'no-var': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-unused-vars': 'off',
      'no-self-compare': 'error',
      'no-eval': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
      'no-multi-spaces': [
        'error',
        { ignoreEOLComments: true, exceptions: { PropertyAssignment: false } },
      ],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-useless-computed-key': 'error',
      'space-in-parens': ['error', 'never'],
      'space-before-blocks': 'error',
      'no-whitespace-before-property': 'error',
      'key-spacing': 'error',
      'no-lone-blocks': 'error',
      'computed-property-spacing': ['error', 'always'],
      'block-spacing': ['error', 'always'],
      'array-bracket-newline': ['error', 'consistent'],
      'object-curly-newline': ['error', { multiline: true }],
      'array-element-newline': ['error', { minItems: 3 }],
      'object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: true },
      ],
      'array-bracket-spacing': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'max-len': ['error', { code: 180 }],
      'space-infix-ops': 'error',
      'comma-dangle': ['error', 'always-multiline'],

      'import/no-duplicates': 'error',
      'import/no-useless-path-segments': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'import/order': [
        'error',
        {
          groups: [
            'index',
            'sibling',
            'parent',
            'internal',
            'external',
            'builtin',
            'object',
            'type',
          ],
        },
      ],

      'react-hooks/exhaustive-deps': 0,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',

      'jsx-quotes': ['warn', 'prefer-single'],
      'react/jsx-indent': ['warn', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'always' }],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    },
  },

  // Базовые рекомендованные настройки
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  prettierConfig, // отключаем правила, конфликтующие с Prettier
]);
