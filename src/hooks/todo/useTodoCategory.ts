import { useRecoilValue } from "recoil"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import {
  insertTodoCategory,
  selectTodoCategory,
  selectTodoCategoryList,
} from "@/repository/todo/todo-category.repository.ts"
import { useCallback, useEffect, useState } from "react"
import {
  TodoCategoryModel,
  initTodoCategory,
} from "@/model/todo/todo-category.model.ts"
import { useSearchParams } from "react-router-dom"
import {
  clickAddTodoCategoryService,
  deleteTodoCategoryService,
  getTodoCategoryListService,
  getTodoCategoryService,
} from "@/service/todo/todo-category.service"
import { TodoCategoryDto } from "@/model/todo/todo-category.dto"

export const useTodoCategory = () => {
  const user = useRecoilValue(userProfileSelector)
  const userId = user?.id
  const [categoryList, setCategoryList] = useState<TodoCategoryModel[]>([])
  const [category, setCategory] = useState<TodoCategoryModel>()

  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get("category_id")

  const fetchTodoCategoryList = useCallback(async () => {
    if (!userId) return
    const data = await getTodoCategoryListService(userId)
    if (!data) return
    setCategoryList(data)
  }, [userId])

  const fetchTodoCategory = useCallback(async () => {
    if (!categoryId) {
      setCategory(initTodoCategory())
      return
    }
    const data = await getTodoCategoryService(Number(categoryId))
    if (!data) return
    setCategory(data)
  }, [categoryId])

  const clickAddTodoCategory = async (name: string) => {
    if (!userId) return

    const category = {
      user_id: userId,
      name,
    }
    await clickAddTodoCategoryService(category)
    await fetchTodoCategoryList()
  }

  const clickDeleteTodoCategory = (id: TodoCategoryDto["id"]) => {
    deleteTodoCategoryService(id)
  }

  useEffect(() => {
    fetchTodoCategoryList()
  }, [fetchTodoCategoryList])

  useEffect(() => {
    fetchTodoCategory()
  }, [fetchTodoCategory])

  return {
    categoryList,
    category,
    fetchTodoCategoryList,
    fetchTodoCategory,
    clickAddTodoCategory,
    clickDeleteTodoCategory,
  }
}
