export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'beige',
    values: [
      { name: 'beige', value: '#faf8f5' },
      { name: 'white', value: '#ffffff' },
      { name: 'dark green', value: '#1a2e1a' },
    ],
  },
  docs: {
    theme: {
      base: 'light',
      fontBase: '"Fraunces", Georgia, serif',
      fontCode: 'monospace',
      colors: {
        primary: '#e66000',
        text: '#1a2e1a',
        background: '#faf8f5',
      },
    },
  },
};