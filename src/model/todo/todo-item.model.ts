export type TodoItemModel = {
  id: number
  text: string
  checked: boolean
  sub_item: TodoItemModel[] | null
  is_sub_item: boolean
}
