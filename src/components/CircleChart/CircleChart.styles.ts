import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SvgWrapper = styled.div`
    position: relative;

    &:not(:last-child){
        margin-bottom: 16px;
    }
`

export const Svg = styled.svg`
    transform: rotate(90deg);
`

export const Circle = styled.circle`
    transition: stroke-dashoffset 850ms ease;
`

export const CircleBG = styled.circle.attrs({
    fill: '#FFFFFF',
})``

export const Percentage = styled.span<{theme: string}>`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: ${props => props.theme === 'primary' ? '#0099FF' : '#274060' };

    font-weight: 900;
    font-size: 1.2em;
`

export const Caption = styled.span<{theme: string}>`
    font-size: 1em;
    font-weight: 400;
    text-transform: lowercase;
    color: ${props => props.theme === 'primary' ? '#0099FF' : '#274060' };
`