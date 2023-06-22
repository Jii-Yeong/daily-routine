import DefaultPieChart from "@/components/chart/DefaultPieChart/DefaultPieChart"
import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { useChartSeries } from "@/hooks/chart/useChartSeries"
import "./CheckTodoListChart.scoped.scss"

export default function CheckTodoListChart() {
  const { series } = useChartSeries(CHART_TYPE.checkTodo)
  return (
    <div className="check-todo-list-chart">
      <h1 className="title">할일 완료/미완료 통계</h1>
      <DefaultPieChart series={series} />
    </div>
  )
}
