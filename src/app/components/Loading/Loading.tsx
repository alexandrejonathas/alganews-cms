import * as L from './Loading.styles'

export interface LoadingProps{
    show?: boolean    
}

export default function Loading (props: LoadingProps) {
    if(!props.show)
        return null

    return <L.Wrapper>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </L.Wrapper>    
}