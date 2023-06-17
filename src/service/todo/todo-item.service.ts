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
  const subData = data.filter((item) => item.sub_id)

  const todoList = data.map((item) => {
    const subList = subData
      .filter((sub) => sub.sub_id === item.id)
      .map((item) => toTodoItemModel(item))

    return {
      ...toTodoItemModel(item),
      sub_item: subList.length > 0 ? subList : null,
    }
  })

  return todoList.filter((item) => !item.is_sub_item)
}

export const addTodoListSerivce = async (
  text: string,
  itemId: TodoItemDto["id"] | null,
  userId: TodoItemDto["user_id"],
  categoryId: string | null
) => {
  const todoReq: TodoItemReqDto = {
    todo_text: text,
    user_id: userId,
    sub_id: itemId,
    is_sub_item: !!itemId,
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
