import DefaultPieChart from "@/components/chart/DefaultPieChart/DefaultPieChart"
import { useChartSeries } from "@/hooks/chart/useChartSeries"
import { CHART_TYPE } from "@/constants/chart-type.constants"

export default function CheckTodoListChart() {
  const { series } = useChartSeries(CHART_TYPE.pie)
  return (
    <div className="check-todo-list-chart">
      <DefaultPieChart series={series} />
    </div>
  )
}
