import styled from "styled-components"

export const Wrapper = styled.div`
    .ReactTags__selected {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }

    .ReactTags__tag {
        background-color: #0099FF;
        color: #FFFFFF;

        padding: 4px 8px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ReactTags__remove {
        width: 24px;
        height: 1em;
        border: 0;
        color: #FFFFFF;
        background-color: transparent;
        cursor: pointer;
        font-size: 1em;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ReactTags__tagInput {
        flex-grow: 1;
    }    

    .ReactTags__tagInputField {
        color: #274060;
        background-color: transparent;

        width: 100%;
        
        padding: 4px 0;
        
        font-size: 1em;
        font-family: 'Lato', sans-serif;
        
        outline: none;

        border-radius: 0;
        border: none;
        border-bottom: 1px solid #C4C4C4;
        display: flex;
    }

`