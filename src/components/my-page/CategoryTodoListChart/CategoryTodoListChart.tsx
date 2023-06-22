import DefaultStackChart from "@/components/chart/DefaultStackChart/DefaultStackChart"
import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { useChartSeries } from "@/hooks/chart/useChartSeries"
import "./CategoryTodoListChart.scoped.scss"

export default function CategoryTodoListChart() {
  const { series, xAxis } = useChartSeries(CHART_TYPE.categoryTodo)
  return (
    <div className="category-todo-list-chart">
      <h1 className="title">카테고리별 통계</h1>
      <DefaultStackChart series={series} xAxis={xAxis} />
    </div>
  )
}
