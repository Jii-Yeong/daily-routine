import type {Meta, StoryObj} from "@storybook/react";

import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem.tsx"

const meta = {
  title: "DefaultTodoItem",
  component: DefaultTodoItem,
} satisfies Meta<typeof DefaultTodoItem>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    text: "꽃에 물 주기",
    checked: true
  }
};