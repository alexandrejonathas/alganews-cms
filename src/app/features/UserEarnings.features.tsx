import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { User } from "../../sdk/@types"
import UserService from "../../sdk/services/User.service"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"

export function UserEarningsFeatures () {

    const [user, setUser] = useState<User.Detailed>()

    useEffect(() => {
        UserService.getDetailedUser(7)
            .then(setUser)
    }, [])

    if(!user)
        return null

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