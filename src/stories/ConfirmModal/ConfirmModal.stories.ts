import type { Meta, StoryObj } from "@storybook/react"

import ConfirmModalComponent from "@/components/modal/ConfirmModal/ConfirmModal"

const meta = {
  title: "Modal",
  component: ConfirmModalComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ConfirmModalComponent>

export default meta

export const DefaultConfirmModal: StoryObj<typeof meta> = {
  args: {
    text: "정말 삭제하시겠습니까?",
  },
}
