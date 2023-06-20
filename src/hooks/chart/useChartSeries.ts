import { checkTodoListSeriesService } from "@/service/chart/chart.service"
import supabaseAdmin from "@/supabase/init"
import { SeriesOptionsType } from "highcharts"
import { useCallback, useEffect, useState } from "react"

export const useChartSeries = (type: string) => {
  const [series, setSeries] = useState<SeriesOptionsType[]>([])

  const fetchChartData = useCallback(async () => {
    const { data } = await supabaseAdmin.auth.getSession()
    if (!data.session) return
    const userId = data.session?.user.id
    switch (type) {
      case "pie": {
        const series = await checkTodoListSeriesService(userId)
        setSeries(series)
        break
      }
    }
  }, [type])

  useEffect(() => {
    fetchChartData()
  }, [fetchChartData])

  return {
    series,
  }
}
