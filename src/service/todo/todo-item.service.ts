import {
  TodoItemDto,
  TodoItemReqDto,
  toTodoItemModel,
} from "@/model/todo/todo-item.dto"
import {
  addTodoItem,
  deleteTodoItem,
  getTodoList,
  updateTodoItem,
} from "@/repository/todo/todo-item.repository"

export const getTodoListService = async (
  userId: TodoItemDto["user_id"],
  categoryId: string | null
) => {
  const data = await getTodoList(userId, categoryId)
  return data.map((item) => toTodoItemModel(item))
}

export const addTodoListSerivce = async (
  text: string,
  userId: TodoItemDto["user_id"],
  categoryId: string | null
) => {
  const todoReq: TodoItemReqDto = {
    todo_text: text,
    user_id: userId,
  }
  if (categoryId) todoReq["category_id"] = Number(categoryId)
  await addTodoItem(todoReq)
}

export const updateTodoItemService = async (
  id: number,
  todoItem: TodoItemReqDto
) => {
  await updateTodoItem(id, todoItem)
}

export const deleteTodoItemService = async (id: number) => {
  await deleteTodoItem(id)
}
