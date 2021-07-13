import styled from "styled-components"
import { transparentize } from "polished"

const COLORS = {
    primary: '#0099FF',
    danger: '#F84735',
    foreground: '#274060'
}

const THEME = {
    primary: {
        background: '#0099FF',
        color: '#FFFFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        `,
        disabled: {
            background: transparentize(0.44, COLORS.primary),
            color: '#FFFFFF'
        }
    },
    danger: {
        background: '#F84735',
        color: '#FFFFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        `,
        disabled: {
            background: transparentize(0.75, COLORS.danger),
            color: COLORS.danger
        }
    },
    text: {
        background: 'transparent',
        color: '#274060',
        onHover: `
            border-color: #274060;
        `,
        disabled: {
            background: transparentize(0.44, '#508AC9'),
            color: COLORS.foreground
        }
    }
}

export const Wrapper = styled.button<{
    variant: 'danger' | 'text' | 'primary'
}>`
    padding: 6px 8px 4px;
    border: 1px solid ${ props => THEME[props.variant].background }; 
    color: ${ props => THEME[props.variant].color };
    background: ${ props => THEME[props.variant].background };
    
    &:hover,
    &:focus {
        ${ props => THEME[props.variant].onHover };    
    }

    &:disabled {
        background: ${ props => THEME[props.variant].disabled.background };
        color: ${ props => THEME[props.variant].disabled.color };

        pointer-events: none;
        border-color: transparent;
    }

`