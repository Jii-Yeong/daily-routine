import { useEffect, useState } from "react"
import { TodoItemModel } from "@/model/todo/todo-item.model.ts"
import {
  addTodoItem,
  deleteTodoItem,
  getTodoList,
  updateTodoItem,
} from "@/repository/todo/todo-item.repository.ts"
import { TodoItemReqDto, toTodoItemModel } from "@/model/todo/todo-item.dto.ts"
import { useRecoilValue } from "recoil"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import { useSearchParams } from "react-router-dom"

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodoItemModel[]>([])
  const userData = useRecoilValue(userProfileSelector)
  const userId = userData?.id
  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get("category_id")

  const fetchTodoList = async () => {
    if (!userId) return
    const data = await getTodoList(userId, categoryId)
    if (!data) return

    const parsedData = data.map((item) => toTodoItemModel(item))
    setTodoList(parsedData)
  }

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

    const todoReq: TodoItemReqDto = {
      todo_text: text,
      user_id: userId,
    }
    if (categoryId) todoReq["category_id"] = Number(categoryId)
    await addTodoItem(todoReq)
    await fetchTodoList()
  }

  const clickCheckboxButton = async (id: number, checked: boolean) => {
    if (!userId) return

    const todoItem = {
      checked,
    }
    await updateTodoItem(id, todoItem)
  }

  const clickDeleteButton = async (id: number) => {
    if (!userId) {
      const filteredTodoList = todoList.filter((item) => item.id !== id)
      setTodoList(filteredTodoList)
      return
    }
    await deleteTodoItem(id)
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
    await updateTodoItem(id, todoItem)
    await fetchTodoList()
  }

  useEffect(() => {
    fetchTodoList()
  }, [categoryId])

  return {
    todoList,
    enterTodoItem,
    clickCheckboxButton,
    clickDeleteButton,
    editTodoItemValue,
  }
}
