import {TodoItemModel} from "@/model/todo/todo-item.model.ts";

export type TodoItemDto = {
  id: number,
  user_id: string,
  todo_text: string,
  checked: boolean,
  created_at: string,
}

export type TodoItemReqDto = Partial<Pick<TodoItemDto, "todo_text" | "checked">>

export const toTodoItemModel = (todoItem: TodoItemDto): TodoItemModel => {
  return {
    id: todoItem.id,
    text: todoItem.todo_text,
    checked: todoItem.checked,
  }
}

export const toTodoItemReqDto = (todoItem: TodoItemModel): TodoItemReqDto => {
  return {
    id: todoItem.id,
    todo_text: todoItem.text,
    checked: todoItem.checked
  }
}