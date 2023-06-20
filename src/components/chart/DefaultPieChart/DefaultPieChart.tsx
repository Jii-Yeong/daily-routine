import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type DefaultPieChartProps = {
  options: Highcharts.Options
}

export default function DefaultPieChart({ options }: DefaultPieChartProps) {
  return (
    <div className="default-pie-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
