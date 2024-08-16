import type {Preview} from "@storybook/react";
import '../src/root/tailwind.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'custom-dark',
      values: [
        {
          name: 'custom-dark',
          value: '#0D0D0D'
        },
        {
          name: 'custom-light',
          value: '#E6E6E6'
        }
      ]
    }
  },
};

export default preview;
