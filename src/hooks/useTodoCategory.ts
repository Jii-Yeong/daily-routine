import { useRecoilValue } from "recoil"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import {
  insertTodoCategory,
  selectTodoCategory,
} from "@/repository/todo/todo-category.repository.ts"
import { useEffect, useState } from "react"
import { TodoCategoryModel } from "@/model/todo/todo-category.model.ts"

export const useTodoCategory = () => {
  const user = useRecoilValue(userProfileSelector)
  const userId = user?.id

  const [category, setCategory] = useState<TodoCategoryModel[]>([])
  const fetchTodoCategory = async () => {
    if (!userId) return
    const data = await selectTodoCategory(userId)
    if (!data) return
    setCategory(data)
  }

  const addTodoCategory = async (name: string) => {
    if (!userId) return

    const category = {
      user_id: userId,
      name,
    }
    await insertTodoCategory(category)
    await fetchTodoCategory()
  }

  useEffect(() => {
    fetchTodoCategory()
  }, [])

  return {
    category,
    fetchTodoCategory,
    addTodoCategory,
  }
}
