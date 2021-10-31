import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import styled from "styled-components"
import useUserEarnings from "../../core/hooks/useUserEarnings"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"

export function UserEarningsFeatures () {

    const { user, error, fetchUserEarnings } = useUserEarnings()

    const userId = 6

    useEffect(() => {
        fetchUserEarnings(userId)
    }, [fetchUserEarnings])

    if(error)
        throw error

    if(!user)
        return <UserEaningsFeaturesWrapper style={{ height: '123px' }}>
            <Skeleton width={150} height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
            <Skeleton height={40} />
        </UserEaningsFeaturesWrapper>

    return <UserEaningsFeaturesWrapper>

        <ValueDescriptor 
            variant="primary"
            value={user.metrics.monthlyEarnings} 
            isCurrency={true} 
            description="Ganhos no mês" />

        <ValueDescriptor 
            variant="primary"
            value={user.metrics.weeklyEarnings} 
            isCurrency={true} 
            description="Ganhos na semana" />

        <ValueDescriptor 
            variant="default"
            value={user.metrics.lifetimeEarnings} 
            isCurrency={true} 
            description="Ganhos de sempre" />

        <ValueDescriptor 
            variant="default"
            value={user.metrics.lifetimeWords} 
            isCurrency={true} 
            description="Total de palavras" />

    </UserEaningsFeaturesWrapper>
}

const UserEaningsFeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 16px;
`