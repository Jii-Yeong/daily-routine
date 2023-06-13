import { TodoItemModel } from "@/model/todo/todo-item.model.ts"

export type TodoItemDto = {
  id: number
  user_id: string
  todo_text: string
  checked: boolean
  created_at: string
  category_id: number
}

export type TodoItemReqDto = Partial<
  Pick<TodoItemDto, "user_id" | "todo_text" | "checked" | "category_id">
>

export const toTodoItemModel = (todoItem: TodoItemDto): TodoItemModel => {
  return {
    id: todoItem.id,
    text: todoItem.todo_text,
    checked: todoItem.checked,
  }
}

export const toTodoItemReqDto = (todoItem: TodoItemModel): TodoItemReqDto => {
  return {
    todo_text: todoItem.text,
    checked: todoItem.checked,
  }
}
