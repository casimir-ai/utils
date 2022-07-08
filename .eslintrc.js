module.exports = {
  root: true,
  extends: [
    './packages/eslint-config',
    './packages/eslint-config/vue'
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './scripts/**/*',
          './jest.config.js',
          './jest.setup.js'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        './packages/eslint-config',
        './packages/eslint-config/vue',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base'
      ],
      rules: {
        '@typescript-eslint/comma-dangle': [
          'error',
          'never'
        ]
      }
    }
  ]
};
