import type {Meta, StoryObj} from "@storybook/react";
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx"

const meta = {
  title: "TodoInput",
  component: TodoInput,
} satisfies Meta<typeof TodoInput>;

export default meta;

export const Default: StoryObj<typeof meta> = {};