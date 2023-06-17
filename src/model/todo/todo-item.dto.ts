import { TodoItemModel } from "@/model/todo/todo-item.model.ts"

export type TodoItemDto = {
  id: number
  user_id: string
  todo_text: string
  checked: boolean
  created_at: string
  category_id: number
  sub_id: number | null
  is_sub_item: boolean
}

export type TodoItemReqDto = Partial<
  Pick<
    TodoItemDto,
    | "user_id"
    | "todo_text"
    | "checked"
    | "category_id"
    | "sub_id"
    | "is_sub_item"
  >
>

export const toTodoItemModel = (todoItem: TodoItemDto): TodoItemModel => {
  return {
    id: todoItem.id,
    text: todoItem.todo_text,
    checked: todoItem.checked,
    sub_item: null,
    is_sub_item: todoItem.is_sub_item,
  }
}

export const toTodoItemReqDto = (todoItem: TodoItemModel): TodoItemReqDto => {
  return {
    todo_text: todoItem.text,
    checked: todoItem.checked,
  }
}
