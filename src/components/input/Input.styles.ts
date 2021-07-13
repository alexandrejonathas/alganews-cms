import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.label`
    display: flex;
    gap: 16px;
    flex-direction: column;

    span.Label {
        font-size: 14px;
        font-weight: 500;
        color: #274060;
    }

    input {
        box-sizing: border-box;
        
        padding: 6px;

        height: 28px;
        font-size: 18px;
        font-weight: 500;
        color: #274060;
        
        border: none;
        outline: none;
        border-radius: 0;
        border-bottom: 1px solid #274060;

        &::placeholder {
          color: ${ transparentize(0.5, '#274060') };  
        }
    }
`