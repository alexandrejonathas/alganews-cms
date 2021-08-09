import styled from "styled-components";

export const Wrapper = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 35px;

    color: #274060;

    span.Description {
        font-size: 12px;
        font-weight: bold;
    }

    span.Value {
        font-size: 14px;
        font-weight: 400;
    }
`