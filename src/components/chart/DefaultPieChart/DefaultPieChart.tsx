import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import { DEFAULT_OPTIONS } from "@/constants/chart/default-chart-options.constants"
import * as Highcharts from "highcharts"
import { HighchartsReact } from "highcharts-react-official"

type DefaultPieChartProps = {
  series: Highcharts.SeriesOptionsType[]
}

export default function DefaultPieChart({ series }: DefaultPieChartProps) {
  const options: Highcharts.Options = {
    ...DEFAULT_OPTIONS,
    chart: {
      type: CHART_TYPE.pie,
    },
    title: {
      text: "",
    },
    series,
  }
  return (
    <div className="default-pie-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
