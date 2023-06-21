import DefaultStackChart from "@/components/chart/DefaultStackChart/DefaultStackChart"
import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { useChartSeries } from "@/hooks/chart/useChartSeries"

export default function DateTodoListChart() {
  const { series, xAxis } = useChartSeries(CHART_TYPE.stackedColumn)

  return <DefaultStackChart series={series} xAxis={xAxis} />
}
