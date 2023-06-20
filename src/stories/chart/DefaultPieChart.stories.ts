import type { Meta, StoryObj } from "@storybook/react"

import DefaultPieChart from "@/components/chart/DefaultPieChart/DefaultPieChart"

const meta = {
  title: "Chart",
  component: DefaultPieChart,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DefaultPieChart>

export default meta

export const PieChart: StoryObj<typeof meta> = {
  args: {
    options: {
      chart: {
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Browser market shares in May, 2020",
        align: "left",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          type: "pie",
          name: "Brands",
          data: [
            {
              name: "Chrome",
              y: 70.67,
              sliced: true,
              selected: true,
            },
            {
              name: "Edge",
              y: 14.77,
            },
            {
              name: "Firefox",
              y: 4.86,
            },
            {
              name: "Safari",
              y: 2.63,
            },
            {
              name: "Internet Explorer",
              y: 1.53,
            },
            {
              name: "Opera",
              y: 1.4,
            },
            {
              name: "Sogou Explorer",
              y: 0.84,
            },
            {
              name: "QQ",
              y: 0.51,
            },
            {
              name: "Other",
              y: 2.6,
            },
          ],
        },
      ],
    },
  },
}
