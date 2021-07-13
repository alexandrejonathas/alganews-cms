import styled from "styled-components";

export const Wrapper = styled.div<{
    color:string
}>`
    display: flex;
    flex-direction: column;

    span.Description {
        font-size: 12px;
        font-weight: 300;
        color: #274060;
    }

    span.Currency {
        font-size: 18px;
        color: ${ props => props.color };        
    }

    span.Value {
        font-size: 18px;
        font-weight: 700;
        color: ${ props => props.color }; 
    }
`