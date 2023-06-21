import DefaultPieChart from "@/components/chart/DefaultPieChart/DefaultPieChart"
import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { useChartSeries } from "@/hooks/chart/useChartSeries"

export default function CheckTodoListChart() {
  const { series } = useChartSeries(CHART_TYPE.checkTodo)
  return (
    <div className="check-todo-list-chart">
      <DefaultPieChart series={series} />
    </div>
  )
}
