export type TodoItemModel = {
  id: number
  text: string
  checked: boolean
  sub_item: TodoItemModel[] | null
  sub_id: boolean
  category_id: number
}
