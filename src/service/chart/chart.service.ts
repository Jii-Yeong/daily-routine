import { CHART_TYPE } from "@/constants/chart-type.constants"
import { getTodoList } from "@/repository/todo/todo-item.repository"
import { SeriesPieOptions } from "highcharts"

export const checkTodoListSeriesService = async (
  id: string
): Promise<SeriesPieOptions[]> => {
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
  return series
}
