import { CHART_TYPE } from "@/constants/chart/chart-type.constants"
import {
  categoryTodoListOptionsService,
  checkTodoListOptionsService,
  dateTodoListOptionsService,
} from "@/service/chart/chart.service"
import supabaseAdmin from "@/supabase/init"
import { SeriesOptionsType, XAxisOptions } from "highcharts"
import { useCallback, useEffect, useState } from "react"

export const useChartSeries = (type: string) => {
  const [series, setSeries] = useState<SeriesOptionsType[]>([])
  const [xAxis, setXAxis] = useState<XAxisOptions>({})

  const fetchChartData = useCallback(async () => {
    const { data } = await supabaseAdmin.auth.getSession()
    if (!data.session) return
    const userId = data.session?.user.id
    switch (type) {
      case CHART_TYPE.checkTodo: {
        const { series } = await checkTodoListOptionsService(userId)
        setSeries(series)
        break
      }
      case CHART_TYPE.dateTodo: {
        const { series, xAxis } = await dateTodoListOptionsService(userId)
        setSeries(series)
        setXAxis(xAxis)
        break
      }
      case CHART_TYPE.categoryTodo: {
        const { series, xAxis } = await categoryTodoListOptionsService(userId)
        setSeries(series)
        setXAxis(xAxis)
        break
      }
    }
  }, [type])

  useEffect(() => {
    fetchChartData()
  }, [fetchChartData])

  return {
    series,
    xAxis,
  }
}
