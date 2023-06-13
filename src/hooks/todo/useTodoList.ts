import {useEffect, useState} from "react";
import {TodoItemModel} from "@/model/todo/todo-item.model.ts";
import {addTodoItem, deleteTodoItem, getTodoList, updateTodoItem} from "@/repository/todo/todo-item.repository.ts";
import {toTodoItemModel} from "@/model/todo/todo-item.dto.ts";
import {useRecoilValue} from "recoil";
import {userProfileSelector} from "@/recoil/user/user-selectors.ts";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodoItemModel[]>([])
  const userData = useRecoilValue(userProfileSelector)
  const userId = userData?.id

  const fetchTodoList = async () => {
    if (!userId) return

    const data = await getTodoList(userId)
    if (!data) return

    const parsedData = data.map(item => toTodoItemModel(item))
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
        }])
      return
    }
    await addTodoItem(text)
    await fetchTodoList()
  }

  const clickCheckboxButton = async (id: number, checked: boolean) => {
    if (!userId) return

    const todoItem = {
      checked
    }
    await updateTodoItem(id, todoItem)
  }

  const clickDeleteButton = async (id: number) => {
    if (!userId) {
      const filteredTodoList = todoList.filter(item => item.id !== id)
      setTodoList(filteredTodoList)
      return
    }
    await deleteTodoItem(id)
    await fetchTodoList()
  }

  useEffect(() => {
    fetchTodoList()
  }, [])

  return {
    todoList,
    enterTodoItem,
    clickCheckboxButton,
    clickDeleteButton
  }
}