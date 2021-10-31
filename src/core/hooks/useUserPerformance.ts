import { MetricService } from "alexandrejonathas-alganews-sdk"
import { useCallback, useState } from "react"
import { ChartProps } from "../../app/components/Chart/Chart"
import transformEditorMontlyEarningsIntoChartJs from "../utils/transformEditorMonthlyEarningsIntoChartJs"

export default function useUserPerformance () {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()

  const [error, setError] = useState<Error>()

  const fetchUserPerformance = useCallback(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMontlyEarningsIntoChartJs)
      .then(setEditorEarnings)
      .catch(e => setError(new Error(e.message)))
  }, [])
  
  return {
    editorEarnings,
    error,
    fetchUserPerformance
  }

}