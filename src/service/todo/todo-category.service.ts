import {
  TodoCategoryDto,
  TodoCategoryReqDto,
} from "@/model/todo/todo-category.dto"
import {
  deleteTodoCategory,
  insertTodoCategory,
  selectTodoCategory,
  selectTodoCategoryList,
} from "@/repository/todo/todo-category.repository"

export const getTodoCategoryListService = async (
  userId: TodoCategoryDto["user_id"]
) => {
  return await selectTodoCategoryList(userId)
}

export const getTodoCategoryService = async (
  categoryId: TodoCategoryDto["id"]
) => {
  return await selectTodoCategory(Number(categoryId))
}

export const clickAddTodoCategoryService = async (
  category: TodoCategoryReqDto
) => {
  await insertTodoCategory(category)
}

export const deleteTodoCategoryService = async (
  categoryId: TodoCategoryDto["id"]
) => {
  await deleteTodoCategory(categoryId)
}
