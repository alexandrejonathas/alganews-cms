import { MetricService, Metric } from "alexandrejonathas-alganews-sdk"
import { useCallback, useState } from "react"

export default function useTopTags () {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])
  const [error, setError] = useState<Error>()

  const fetchTopTags = useCallback(async () => {
    MetricService.getTop3Tags()
      .then(setTopTags)
      .catch(e => setError(new Error(e.message)))    
  }, [])

  return {
    topTags,
    error,
    fetchTopTags
  }

}