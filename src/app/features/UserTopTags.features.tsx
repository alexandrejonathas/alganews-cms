import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import CircleChart from "../components/CircleChart";

export default function UserTopTagsFeatures () {

    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    useEffect(() => {
        MetricService.getTop3Tags()
            .then(setTopTags)
    }, [])

    return <UserTopTagsWrapper>
        {
            topTags.map((tag, index) => {
                return <CircleChart 
                    theme={index == 0 ? 'primary' : 'default'} 
                    size={88} 
                    caption={tag.tagName}     
                    progress={tag.percentage} 
                />
            })
        }
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 32px;
`