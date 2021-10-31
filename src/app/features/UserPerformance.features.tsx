import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import withBoundary from "../../core/hoc/withBoundary";
import useUserPerformance from "../../core/hooks/useUserPerformance";
import Chart from "../components/Chart/Chart";

function UserPermormanceFeatures () {

    const { editorEarnings, error, fetchUserPerformance } = useUserPerformance()

    useEffect(() => {
      fetchUserPerformance()
    }, [fetchUserPerformance])

    if(error)
      throw error

    if(!editorEarnings)
      return <div>
        <Skeleton height={'227px'} />
      </div>
    
    return <Chart 
        title="Média de performance nos últimos 12 meses" 
        data={editorEarnings} 
    />
}

export default withBoundary(UserPermormanceFeatures, 'performance do usuário')