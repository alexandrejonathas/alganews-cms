import { Metric, MetricService } from "alexandrejonathas-alganews-sdk";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import CircleChart from "../components/CircleChart";

export default function UserTopTagsFeatures () {

    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])

    const [error, setError] = useState<Error>()

    useEffect(() => {
        MetricService.getTop3Tags()
            .then(setTopTags)
            .catch(e => setError(new Error(e.message)))
    }, [])

    if(error)
        throw error

    if(!topTags.length)
        return <UserTopTagsWrapper>
            <Skeleton circle={true} height={88} width={88} />
            <Skeleton circle={true} height={88} width={88} />
            <Skeleton circle={true} height={88} width={88} />
        </UserTopTagsWrapper>

    return <UserTopTagsWrapper>
        {
            topTags.map((tag, index) => {
                return <CircleChart
                    key={index} 
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