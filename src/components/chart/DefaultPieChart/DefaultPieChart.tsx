import { CHART_TYPE } from "@/constants/chart-type.constants"
import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type DefaultPieChartProps = {
  series: Highcharts.SeriesOptionsType[]
}

export default function DefaultPieChart({ series }: DefaultPieChartProps) {
  const options: Highcharts.Options = {
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
