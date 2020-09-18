module.exports = {
"stories": ['../src/app/components/**/*.stories.ts'],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      }
    }
  ]
}
