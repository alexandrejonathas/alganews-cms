import * as L from './Loading.styles'

export default function Loading () {
    return <L.Wrapper>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </L.Wrapper>    
}