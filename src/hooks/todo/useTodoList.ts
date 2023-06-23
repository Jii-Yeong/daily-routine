import { toTodoItemReqDto } from "@/model/todo/todo-item.dto"
import { TodoItemModel } from "@/model/todo/todo-item.model.ts"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import {
  addTodoListSerivce,
  deleteTodoItemService,
  getTodoListService,
  updateTodoItemService,
} from "@/service/todo/todo-item.service"
import { DragEvent, useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useRecoilValue } from "recoil"

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodoItemModel[]>([])
  const [dragStartElement, setDragStartElement] =
    useState<HTMLDivElement | null>()
  const [dragItem, setDragItem] = useState<TodoItemModel>()
  const userData = useRecoilValue(userProfileSelector)
  const userId = userData?.id
  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get("category_id")
  const fetchTodoList = useCallback(async () => {
    if (!userId) return
    const data = await getTodoListService(userId, categoryId)
    setTodoList(data)
  }, [userId, categoryId])

  const enterTodoItem = async (
    text: TodoItemModel["text"],
    itemId?: TodoItemModel["id"]
  ) => {
    if (!userId) return
    await addTodoListSerivce(text, itemId || null, userId, categoryId)
    await fetchTodoList()
  }

  const clickCheckboxButton = async (
    id: TodoItemModel["id"],
    checked: TodoItemModel["checked"]
  ) => {
    if (!userId) return

    const todoItem = {
      checked,
    }
    await updateTodoItemService(id, todoItem)
    await fetchTodoList()
  }

  const clickDeleteButton = async (id: TodoItemModel["id"]) => {
    if (!userId) {
      const filteredTodoList = todoList.filter((item) => item.id !== id)
      setTodoList(filteredTodoList)
      return
    }
    await deleteTodoItemService(id)
    await fetchTodoList()
  }

  const editTodoItemValue = async (
    id: TodoItemModel["id"],
    text: TodoItemModel["text"]
  ) => {
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

  const dragStartTodoItem = (e: DragEvent, item: TodoItemModel) => {
    setDragItem(item)

    const element = e.target as HTMLDivElement
    setDragStartElement(element)

    setTimeout(() => {
      element.classList.add("hidden")
    })
  }

  const dragOverTodoItem = (e: DragEvent) => {
    e.preventDefault()
  }

  const dragEndTodoItem = () => {
    if (!dragStartElement) return
    dragStartElement.classList.remove("hidden")
    dragStartElement.classList.remove("draggable")
  }

  const dropTodoItem = async (e: DragEvent, item: TodoItemModel) => {
    e.preventDefault()
    if (!dragItem) return

    const copyItem = { ...item }

    item.order = dragItem.order
    dragItem.order = copyItem.order

    await updateTodoItemService(item.id, toTodoItemReqDto(item))
    await updateTodoItemService(dragItem.id, toTodoItemReqDto(dragItem))

    fetchTodoList()
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
    dragStartTodoItem,
    dragOverTodoItem,
    dropTodoItem,
    dragEndTodoItem,
  }
}
