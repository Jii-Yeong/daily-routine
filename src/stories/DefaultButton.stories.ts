import type {Meta, StoryObj} from "@storybook/react";

import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: DefaultButton,
} satisfies Meta<typeof DefaultButton>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button: StoryObj<typeof meta> = {
  args: {
    text: "Button",
  },
};