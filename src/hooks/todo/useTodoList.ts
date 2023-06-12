import {useState} from "react";
import {TodoItemModel} from "@/model/todo/todo-item.model.ts";

export const useTodoList = () => {
  const todoListTemp = [{
    id: 1,
    text: "꽃에 물 주기",
    checked: true,
  }, {
    id: 2,
    text: "강아지 밥 주기",
    checked: false,
  }]

  const [todoList, setTodoList] = useState<TodoItemModel[]>(todoListTemp)

  const enterTodoItem = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Math.random(),
        text,
        checked: false,
      }])
  }

  return {
    todoList,
    enterTodoItem
  }
}