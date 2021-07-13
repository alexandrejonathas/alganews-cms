import styled from "styled-components"

const THEME = {
    primary: {
        background: '#0099FF',
        color: '#FFFFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        `
    },
    danger: {
        background: '#F84735',
        color: '#FFFFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        `
    },
    text: {
        background: 'transparent',
        color: '#274060',
        onHover: `
            border-color: #274060;
        `
    }
}

export const Wrapper = styled.button<{
    variant: 'danger' | 'text' | 'primary'
}>`
    padding: 6px 8px 4px;
    border: 1px solid ${ props => THEME[props.variant].background }; 
    color: ${ props => THEME[props.variant].color };
    background: ${props => THEME[props.variant].background };
    
    &:hover,
    &:focus {
        ${ props => THEME[props.variant].onHover }    
    }

`