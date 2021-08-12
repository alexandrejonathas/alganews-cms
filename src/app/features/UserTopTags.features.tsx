import styled from "styled-components";
import CircleChart from "../components/CircleChart";

export default function UserTopTagsFeatures () {
    return <UserTopTagsWrapper>
        <CircleChart theme="primary" progress={80} size={88} caption={'JavaScript'} />
        <CircleChart progress={46} size={88} caption={'Java'} />
        <CircleChart progress={24} size={88} caption={'Scrum'} />
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 32px;
`