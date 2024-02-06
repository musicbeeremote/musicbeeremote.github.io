import rotki from '@rotki/eslint-config';

export default rotki({
  vue: true,
  typescript: true,
  formatters: true,
  stylistic: true,
}, {
  files: ['.vitepress/**/*.{ts,mts}'],
  rules: {
    'import/no-default-export': 'off',
  },
});
