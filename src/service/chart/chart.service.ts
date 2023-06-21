import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { getTodoList } from "@/repository/todo/todo-item.repository"
import { parseDateToFormat } from "@/utils/date.utils"

export const checkTodoListOptionsService = async (id: string) => {
  const todoList = await getTodoList(id)
  const todoListSize = todoList.length

  const checkedList = todoList.filter((item) => item.checked)
  const checkedListSize = checkedList.length
  const uncheckedListSize = todoListSize - checkedListSize

  const checkPercentage = (checkedListSize / todoListSize) * 100
  const uncheckedPercent = (uncheckedListSize / todoListSize) * 100

  const data = [
    {
      name: "완료",
      y: checkPercentage,
    },
    {
      name: "미완료",
      y: uncheckedPercent,
    },
  ]
  const series = [
    {
      type: CHART_TYPE.pie,
      data,
    },
  ]
  return {
    series,
  }
}

export const dateTodoListSeriesService = async (id: string) => {
  const todoList = await getTodoList(id)
  const dateList = todoList.map((item) => parseDateToFormat(item.created_at))
  const deduplicationList = dateList.filter(
    (item, index) => dateList.indexOf(item) === index
  )

  const unCheckedList = deduplicationList.map((date) => {
    let count = 0
    todoList
      .filter((item) => !item.checked)
      .forEach((item) => {
        const parsedDate = parseDateToFormat(item.created_at)
        if (date === parsedDate) ++count
      })
    return count
  })

  const checkedList = deduplicationList.map((date) => {
    let count = 0
    todoList
      .filter((item) => item.checked)
      .forEach((item) => {
        const parsedDate = parseDateToFormat(item.created_at)
        if (date === parsedDate) ++count
      })
    return count
  })

  const series = [
    {
      type: CHART_TYPE.column,
      name: "미완료",
      data: unCheckedList,
    },
    {
      type: CHART_TYPE.column,
      name: "완료",
      data: checkedList,
    },
  ]

  const xAxis = {
    categories: deduplicationList,
  }
  return {
    series,
    xAxis,
  }
}
