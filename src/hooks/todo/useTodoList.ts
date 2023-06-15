import { TodoItemModel } from "@/model/todo/todo-item.model.ts"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import {
  addTodoListSerivce,
  deleteTodoItemService,
  getTodoListService,
  updateTodoItemService,
} from "@/service/todo/todo-item.service"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useRecoilValue } from "recoil"

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodoItemModel[]>([])
  const userData = useRecoilValue(userProfileSelector)
  const userId = userData?.id
  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get("category_id")
  const fetchTodoList = useCallback(async () => {
    if (!userId) return
    const data = await getTodoListService(userId, categoryId)
    setTodoList(data)
  }, [userId, categoryId])

  const enterTodoItem = async (text: string) => {
    if (!userId) {
      setTodoList([
        ...todoList,
        {
          id: Math.random(),
          text,
          checked: false,
        },
      ])
      return
    }
    await addTodoListSerivce(text, userId, categoryId)
    await fetchTodoList()
  }

  const clickCheckboxButton = async (id: number, checked: boolean) => {
    if (!userId) return

    const todoItem = {
      checked,
    }
    await updateTodoItemService(id, todoItem)
  }

  const clickDeleteButton = async (id: number) => {
    if (!userId) {
      const filteredTodoList = todoList.filter((item) => item.id !== id)
      setTodoList(filteredTodoList)
      return
    }
    await deleteTodoItemService(id)
    await fetchTodoList()
  }

  const editTodoItemValue = async (id: number, text: string) => {
    if (!userId) {
      const filteredTodoList = todoList.map((item) => {
        if (item.id === id) item.text = text
        return item
      })
      setTodoList(filteredTodoList)
      return
    }
    const todoItem = {
      todo_text: text,
    }
    await updateTodoItemService(id, todoItem)
    await fetchTodoList()
  }

  useEffect(() => {
    fetchTodoList()
  }, [fetchTodoList])

  return {
    fetchTodoList,
    todoList,
    enterTodoItem,
    clickCheckboxButton,
    clickDeleteButton,
    editTodoItemValue,
  }
}
