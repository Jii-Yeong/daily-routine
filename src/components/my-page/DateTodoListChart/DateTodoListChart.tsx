import DefaultStackChart from "@/components/chart/DefaultStackChart/DefaultStackChart"
import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { useChartSeries } from "@/hooks/chart/useChartSeries"
import "./DateTodoListChart.scoped.scss"

export default function DateTodoListChart() {
  const { series, xAxis } = useChartSeries(CHART_TYPE.dateTodo)

  return (
    <div className="date-todo-list-chart">
      <h1 className="title">날짜별 통계</h1>
      <DefaultStackChart series={series} xAxis={xAxis} />
    </div>
  )
}
