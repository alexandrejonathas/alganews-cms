import styled from "styled-components"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"

export function UserEarningsFeatures () {
    return <UserEaningsFeaturesWrapper>

        <ValueDescriptor 
            variant="primary"
            value={560322.02} 
            isCurrency={true} 
            description="Ganhos no mês" />

        <ValueDescriptor 
            variant="primary"
            value={560322.02} 
            isCurrency={true} 
            description="Ganhos na semana" />

        <ValueDescriptor 
            variant="default"
            value={56032202} 
            isCurrency={true} 
            description="Ganhos de sempre" />

        <ValueDescriptor 
            variant="default"
            value={2_345_347} 
            isCurrency={true} 
            description="Total de palavras" />

    </UserEaningsFeaturesWrapper>
}

const UserEaningsFeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 16px;
`