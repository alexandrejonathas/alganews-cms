import styled from "styled-components"

export const Wrapper = styled.div`
`
export const Label = styled.label`
    background: #0099FF;
    color: #FFFFFF;

    padding: 24px;
    cursor: pointer;

    display: flex;
    align-items: center;
    grid-gap: 12px;


`
export const Input = styled.input`
    display: none;
`
export const ImagePreview = styled.div<{ preview: string }>`
    height: 100%;
    background-image: url(${ props => props.preview });
    background-position: center;
    background-size: cover;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Button = styled.button`
    padding: 16px;
    gap: 10px;

    border: none;
    background-color: #FFFFFF;
    color: #274060;

    font-size: 18px;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImagePreviewWrapper = styled.div`
    background-color: #274060;
    height: 240px;

    ${Button} {
        display: none;
    }

    &:hover {

        ${ImagePreview} {
            opacity: 0.7;
        }

        ${Button} {
            display: block;
            
            padding: 16px;
            gap: 10px;

            border: none;
            background-color: #FFFFFF;
            color: #274060;

            font-size: 1.2em;
            font-weight: 600;

            display: flex;
            justify-content: center;
            align-items: center;                     
        }
    }

`