import {useEffect, useState} from "react";
import {TodoItemModel} from "@/model/todo/todo-item.model.ts";
import {addTodoItem, getTodoList, updateTodoItem} from "@/repository/todo/todo-item.repository.ts";
import {toTodoItemModel} from "@/model/todo/todo-item.dto.ts";
import {useRecoilValue} from "recoil";
import {userProfileSelector} from "@/recoil/user/user-selectors.ts";

export const useTodoList = () => {

  const [todoList, setTodoList] = useState<TodoItemModel[]>([])
  const userData = useRecoilValue(userProfileSelector)

  useEffect(() => {
    const fetchTodoList = async () => {
      const userId = userData?.id
      if (!userId) return

      const data = await getTodoList(userId)
      if (!data) return

      const parsedData = data.map(item => toTodoItemModel(item))
      setTodoList(parsedData)
    }
    fetchTodoList()
  }, [])

  const enterTodoItem = async (text: string) => {
    await addTodoItem(text)
    setTodoList([
      ...todoList,
      {
        id: Math.random(),
        text,
        checked: false,
      }])
  }

  const clickCheckboxButton = async (id: number, checked: boolean) => {
    const todoItem = {
      checked
    }
    await updateTodoItem(id, todoItem)
  }

  return {
    todoList,
    enterTodoItem,
    clickCheckboxButton
  }
}